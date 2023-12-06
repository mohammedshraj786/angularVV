import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SignupFormData, CommanMember } from 'src/app/datatypes/datatype';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
 {
    user: SignupFormData = {
      name: '',
      email: '',
      password: '',
      confirmPassword: undefined,
      agreement: undefined
    };
  
  Alluserdata:any[]=[];

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit()
  {
    this.userService.getUsersData().subscribe(
      (data:any[])=>{
        this.Alluserdata = data;
        console.log('Get success of all data');
        console.log(data);
        
      },
      error =>{
        console.log('Error to get data',error)
      }
    );
  }


  onSubmit(formData: SignupFormData) {

    this.user = formData;
    console.log(this.user);


    const hashedPassword = CryptoJs.SHA256(formData.password || '').toString(CryptoJs.enc.Hex);
     console.log(hashedPassword);
     
     const emailExists = this.Alluserdata.some(user => user.email === formData.email);

    if (emailExists) {
      console.log('Email already exists please use a different email.');
      return; 
    }
    

    const userData: Partial<CommanMember> = {
      isAdmin: false,
      name: formData.name || '',
      email: formData.email || '',
      password: hashedPassword || '',
      image: null, 
      gender: null, 
      address: null,
      phoneNo: null, 
      dob: null,
      isActive: false,
      addToCard: [],
      ordered: [], 
    };

    this.userService.signup(userData as CommanMember).subscribe(
      response => {

        const userId = response.id;
        console.log(userId);
        
        localStorage.setItem('isAdmin', 'false');
        localStorage.setItem('id',userId);
        localStorage.setItem('isLoggedIn', 'true'); 

        console.log('success');
        
      },
      error => {
        console.error(error, 'Registration error');
      }
    );
  }

 
}
