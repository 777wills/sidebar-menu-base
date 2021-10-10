import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-rudolph',
  templateUrl: './rudolph.component.html',
  styleUrls: ['./rudolph.component.css']
})
export class RudolphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes: Routes = [
  { path: '', component: RudolphComponent }
]

@NgModule({
  declarations: [ RudolphComponent ],
  exports: [ RudolphComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class RudolphModule { }