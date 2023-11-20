import { Component, OnInit } from "@angular/core";
interface profile{title:string}
@Component({
    selector:'test-root',
    templateUrl:"./test.component.html",
    styles:["h2{color:red}"],
})



export class Test implements OnInit {
 user:profile={title:'shraj'}




ngOnInit(): void {
    console.log('OnINit',this.user.title);
    
} 
    constructor(){
      console.log('Constractor',this.user);
    }

}