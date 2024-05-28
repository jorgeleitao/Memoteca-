import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThougthComponent } from './components/thoughts/list-thougth/list-thougth.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ListThougthComponent
  },
  {
    path: 'thought/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'thought/editThought/:id',
    component: EditThoughtComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
