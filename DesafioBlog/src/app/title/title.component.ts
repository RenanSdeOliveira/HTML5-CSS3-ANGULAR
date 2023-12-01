import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
  nome: string = 'Renan Oliveira'
  constructor(){

  }
  ngOnInit(): void {
    this.nome = `${this.nome}`
    console.log('criacao do titulo');
  }
}
