import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes', //Esse é o nome do componente para adicionar no html do app
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
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
