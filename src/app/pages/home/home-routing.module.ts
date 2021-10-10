import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RudolphComponent } from 'src/app/pages/rudolph/rudolph.component';
import { SantaComponent } from 'src/app/pages/santa/santa.component';
import { SnowmanComponent } from 'src/app/pages/snowman/snowman.component';
import { TreeComponent } from 'src/app/pages/tree/tree.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'santa',
        loadChildren: () => import('../santa/santa.component').then(m => m.SantaModule)
      },
      {
        path: 'rudolph',
        loadChildren: () => import('../rudolph/rudolph.component').then(m => m.RudolphModule)
      },
      {
        path: 'snowman',
        loadChildren: () => import('../snowman/snowman.component').then(m => m.SnowmanModule)
      },
      {
        path: 'tree',
        loadChildren: () => import('../tree/tree.component').then(m => m.TreeModule)
      },
      { path: '**', redirectTo: 'santa' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
