import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Icon } from 'src/app/const/icons';
import { SanitizeHtmlPipeModule } from 'src/app/pipes/sanitize-html.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() onMenu = new EventEmitter<void>();

  iconMenu = Icon.menu;

  constructor() { }

}

@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    SanitizeHtmlPipeModule
  ]
})
export class HeaderModule { }