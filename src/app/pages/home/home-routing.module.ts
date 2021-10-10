import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RudolphComponent } from 'src/app/components/rudolph/rudolph.component';
import { SantaComponent } from 'src/app/components/santa/santa.component';
import { SnowmanComponent } from 'src/app/components/snowman/snowman.component';
import { TreeComponent } from 'src/app/components/tree/tree.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'santa', component: SantaComponent },
      { path: 'rudolph', component: RudolphComponent },
      { path: 'snowman', component: SnowmanComponent },
      { path: 'tree', component: TreeComponent },
      { path: '**', redirectTo: 'santa' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
