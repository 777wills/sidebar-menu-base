import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onMenuSubject: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
  }

}