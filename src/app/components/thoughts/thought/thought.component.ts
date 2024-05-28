import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {

@Input() thought: Thought = {
  id: 0,
  conteudo:'Estudando angular',
  autoria: 'Dev-Jorge',
  modelo: 'modelo3'
}

widthThought(): string{
  if(this.thought.conteudo.length >= 256) {
    return 'pensamento-g'
  }
  return 'pensamento-p'
}
}
