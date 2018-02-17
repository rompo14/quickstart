import { NgModule, Pipe, PipeTransform }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';
import { PopupComponent } from './popup/popup.component';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value:any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, PopupComponent, SafeHtmlPipe ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
