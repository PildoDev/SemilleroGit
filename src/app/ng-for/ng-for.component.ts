import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ng-for.component.html',
})
export class NgForComponent {
  listaCurso: String[] = ['Typescript', 'JavaScript', 'Java SE', 'C#', 'PHP'];

  mostrar: boolean = true;

  constructor() { }

  setMostrar(): void {
    this.mostrar = (this.mostrar == true) ? false : true
  }
}
