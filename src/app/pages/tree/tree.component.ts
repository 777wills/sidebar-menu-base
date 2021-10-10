import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes: Routes = [
  { path: '', component: TreeComponent }
]

@NgModule({
  declarations: [ TreeComponent ],
  exports: [ TreeComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class TreeModule { }