import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Thought } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent {

thought: Thought ={
      id: 0,
      conteudo: '',
      autoria: '',
      modelo: ''
}

constructor(
  private service: ThoughtService,
  private router: Router,
  private route: ActivatedRoute
){}

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchForId(parseInt(id!)).subscribe((thought)=>{
      this.thought = thought
    })
}
deleteThought(){
   if(this.thought.id){
    this.service.delet(this.thought.id).subscribe(()=>{
      this.router.navigate(['/listThought'])
    })
   }
}

cancel(){
  this.router.navigate(['/listThought'])
}



}
