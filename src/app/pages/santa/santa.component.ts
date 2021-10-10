import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.css']
})
export class SantaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes: Routes = [
  { path: '', component: SantaComponent }
]

@NgModule({
  declarations: [ SantaComponent ],
  exports: [ SantaComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SantaModule { }