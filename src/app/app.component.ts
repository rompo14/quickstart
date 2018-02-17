import { Component, OnInit } from '@angular/core';
import { PopupComponent }  from './popup/popup.component';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [PopupComponent]
})


export class AppComponent implements OnInit  {
  constructor(private appService: AppService, private popup: PopupComponent) {}
  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d.pricelist;
    });
  }

}
