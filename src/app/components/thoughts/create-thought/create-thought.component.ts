import { Thought } from './../thought';
import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  thought: Thought = {

  conteudo: '',
  autoria:'',
  modelo: 'modelo1'

}

constructor(
  private service: ThoughtService,
  private router: Router
){}

createTought(){
  this.service.create(this.thought).subscribe(() =>{
    this.router.navigate(['/listThought'])
  })
}

cancel(){
  this.router.navigate(['/listThought'])
}


}
