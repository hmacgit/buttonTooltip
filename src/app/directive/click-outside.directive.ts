import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements OnInit {

  @Output() clickOutside = new EventEmitter();

  listening: boolean;
  globalClick: Observable<MouseEvent>;

  constructor(private elRef: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
  }


  ngOnInit() {
    this.globalClick.pipe().subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
      });
  }

  onGlobalClick(event: MouseEvent) {
    if (event instanceof MouseEvent && this.listening === true) {
      if(this.isDescendant(this.elRef.nativeElement, event.target) === true) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }

}
