import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() message: string;
  @Input() isShow: boolean;
  @Input() btnCtrl: string;

  @Output() isTooltipClosed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickClose() {
    this.isShow = false;
    this.isTooltipClosed.emit(false);
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.clickClose();
  }


}



