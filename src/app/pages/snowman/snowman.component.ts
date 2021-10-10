import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-snowman',
  templateUrl: './snowman.component.html',
  styleUrls: ['./snowman.component.css']
})
export class SnowmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes: Routes = [
  { path: '', component: SnowmanComponent }
]

@NgModule({
  declarations: [ SnowmanComponent ],
  exports: [ SnowmanComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SnowmanModule { }