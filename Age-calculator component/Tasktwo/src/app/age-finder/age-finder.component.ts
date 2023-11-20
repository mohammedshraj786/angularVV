import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-finder',
  templateUrl: './age-finder.component.html',
  styleUrls: ['./age-finder.component.css']
})
export class AgeFinderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  birthYear: number = 0;
  currentYear: number = new Date().getFullYear();
  age: number = 0;
  ageRange: string = '';

  findAge(): void {
    if (this.birthYear && this.birthYear <= this.currentYear) {
      this.age = this.currentYear - this.birthYear;
      console.log(this.age);
      this.determineAgeRange();
    } else {
      this.age = 0;
      this.ageRange = '';
    }
  }

  determineAgeRange(): void {
    if (this.age >= 1 && this.age <= 12) {
      this.ageRange = 'Children';
    } else if (this.age >= 13 && this.age <= 17) {
      this.ageRange = 'Adolescents';
    } else if (this.age >= 18 && this.age <= 64) {
      this.ageRange = 'Adults';
    } else if (this.age >= 65) {
      this.ageRange = 'Older adults';
    }
  }
}