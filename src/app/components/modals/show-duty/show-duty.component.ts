import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-duty',
  templateUrl: './show-duty.component.html',
  styleUrls: ['./show-duty.component.scss']
})
export class ShowDutyComponent implements OnInit {
  @Input() public data: any;
  @Output() sendEntry: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.sendEntry.emit(false);
  }

}
