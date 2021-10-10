import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(value: any): any {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : '';
  }
}

@NgModule({
  declarations: [SanitizeHtmlPipe],
  exports: [SanitizeHtmlPipe],
  providers: [SanitizeHtmlPipe]
})
export class SanitizeHtmlPipeModule { }


