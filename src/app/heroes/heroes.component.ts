import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', //Esse é o nome do componente para adicionar no html do app
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) {} 
  /**
   * ngOnInit() é um gancho de ciclo de vida . 
   * Chamadas angulares ngOnInit()logo após a criação de um componente. 
   * É um bom lugar para colocar a lógica de inicialização.
   */
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
