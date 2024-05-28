import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thougth',
  templateUrl: './list-thougth.component.html',
  styleUrls: ['./list-thougth.component.css']
})
export class ListThougthComponent {

listThought: Thought [] =[]

constructor(private service: ThoughtService){}

ngOnInit(): void {
  this.service.list().subscribe((listThought =>{
    this.listThought = listThought
  }))
}
}
