import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
  @Input() item: any;
  
  constructor() { }
  ngOnInit() {}

  showPopup(id:any) {
    var popup = document.getElementById(id);
    if(popup !== null) {
    	var box = popup.getBoundingClientRect();
      	if(box.top + popup.clientHeight + 30 > document.documentElement.clientHeight) {
      		popup.classList.add('top');
      	} else {
      		popup.classList.remove('top');
      	}
      	popup.classList.add('show');
    }
  }

  hidePopup(id:any) {
    var popup = document.getElementById(id);
    if(popup !== null) {
      popup.classList.remove('show');
      popup.classList.remove('top');
    }
  }

  getCoords(elem:any) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}
