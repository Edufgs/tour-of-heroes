import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* A propriedade hero deve ser uma propriedade Input, 
  anotada com o decorador @Input(), porque o HeroesComponent externo se vincula a ela assim. */
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
