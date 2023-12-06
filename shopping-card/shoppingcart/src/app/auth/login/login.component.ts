import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommanMember } from 'src/app/datatypes/datatype';
import * as CryptoJs from 'crypto-js'; 
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: CommanMember[] = [];

  constructor(private userService: UserService , private router:Router , private toastr: ToastrService) {}

  ngOnInit(): void {
    this.userService.getUsersData().subscribe(
      (data: CommanMember[]) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;

      const loggedInUser = this.users.find(user => user.email === email);

      if (loggedInUser) {
        const storedHashedPassword = loggedInUser.password;
        console.log(storedHashedPassword);
        
        const hashedPassword = CryptoJs.SHA256(password || '').toString(CryptoJs.enc.Hex);
        console.log(hashedPassword);
        

        if (storedHashedPassword === hashedPassword) {
          const isAdmin = loggedInUser.isAdmin !== undefined ? loggedInUser.isAdmin.toString() : 'false';
          console.log('during login',isAdmin);
          
          localStorage.setItem('id', loggedInUser.id.toString());
          localStorage.setItem('isAdmin', isAdmin);
          localStorage.setItem('isLoggedIn', 'true'); 
          console.log('Success login');
          this.showLoginSuccess();
          setTimeout(()=>{
            this.router.navigate(['/home/allproduct'])

          },500)

        } else {
          console.log('Error in login');
          this.showLoginError();
        }
      } else {
        console.log('User not found');
        
        this.showLoginServerError();
      }
    } else 
    {
      console.log('form is invaled');
      
    }
  }
  showLoginSuccess():void{
    this.toastr.success('Login SuccessFully' , 'Login' , {
      timeOut:3000,
    })
  }

  showLoginServerError():void
  {
    this.toastr.error('Server Error' , 'error',{
      timeOut:3000,
    })
  }

  showLoginError():void
  {
    this.toastr.error('Invalid Credentials' , 'error',{
      timeOut:3000,
    })
  }
}
