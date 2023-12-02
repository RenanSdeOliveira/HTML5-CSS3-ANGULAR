import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit{
  nome: string = '@RenanSdeOliveira'
  constructor(){

  }
  ngOnInit(): void {
    this.nome = `${this.nome}`
    console.log('criacao do titulo');
  }
}
