import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes', //Esse é o nome do componente para adicionar no html do app
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }
  /**
   * ngOnInit() é um gancho de ciclo de vida . 
   * Chamadas angulares ngOnInit()logo após a criação de um componente. 
   * É um bom lugar para colocar a lógica de inicialização.
   */
  ngOnInit(): void {
  }

}
