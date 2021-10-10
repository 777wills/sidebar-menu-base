import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;

  @Input() onMenu$ = new Observable<void>();
  isCloseSidebarMenu = true;

  constructor() {
  }
  
  ngOnInit() {
    this.subsOnMenu();
  }

  subsOnMenu() {
    this.onMenu$.subscribe(_ => {
      const classList = (this.wrapper.nativeElement as HTMLElement).classList;
      classList.value.includes('toggled') ? classList.remove('toggled') : classList.add('toggled');
    })
  }

}

@NgModule({
  declarations: [ SideMenuComponent ],
  exports: [ SideMenuComponent ],
  imports: [
    CommonModule
  ]
})
export class SideMenuModule { }