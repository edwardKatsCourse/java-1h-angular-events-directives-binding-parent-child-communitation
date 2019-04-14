import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('message') public messageFromParent: string;
  @Output() public childEvent = new EventEmitter();

  updateParent() {
    this.childEvent.emit(this.messageFromParent);
  }

  constructor() { }

  ngOnInit() {
  }

}
