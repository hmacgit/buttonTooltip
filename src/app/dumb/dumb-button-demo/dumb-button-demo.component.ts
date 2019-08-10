import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dumb-button-demo',
  templateUrl: './dumb-button-demo.component.html',
  styleUrls: ['./dumb-button-demo.component.scss']
})
export class DumbButtonDemoComponent implements OnInit {

  @Input() btnCtrlGroup: FormControl;
  @Output() btnClickEvent = new EventEmitter();

  buttonCtrl: string;
  openTooltip: boolean;

  constructor() { }

  ngOnInit() {
  }

  btnClick(event) {
    this.btnClickEvent.emit(event);
    this.buttonCtrl = event.target.title;
    this.openTooltip = true;
  }

  isTooltipClosed(event) {
    this.openTooltip = event;
  }

  clickOutsideClose(event) {
    if (event && event.value === true) {
      this.openTooltip = false;
    }
  }

}
