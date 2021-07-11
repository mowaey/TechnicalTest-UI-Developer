import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() public data: any;
  @Output() sendEntry: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.sendEntry.emit(false);
  }

  deleteData(): void {
    this.sendEntry.emit(true);
  }

}
