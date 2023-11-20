import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/assets/todos';
@Component({
  selector: 'app-todoatable',
  templateUrl: './todoatable.component.html',
  styleUrls: ['./todoatable.component.css']
})
export class TodoatableComponent implements OnInit {
  Todos = Todos;
  constructor() { }

  ngOnInit(): void {
  }

}
