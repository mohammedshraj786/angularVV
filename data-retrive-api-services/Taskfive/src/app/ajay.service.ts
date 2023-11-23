import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjayService {

  constructor() { }

value:number=0
  AddCount(){
this.value++
  }


}
