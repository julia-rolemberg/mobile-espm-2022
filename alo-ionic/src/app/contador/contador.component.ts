import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {

  numero = 0;
  constructor() { }

  ngOnInit() {}

  executarIncremento(){
    this.numero++;
  }

}
