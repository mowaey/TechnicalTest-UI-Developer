import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create-update-duty',
  templateUrl: './create-update-duty.component.html',
  styleUrls: ['./create-update-duty.component.scss']
})
export class CreateUpdateDutyComponent implements OnInit {
  @Input() public data: any;
  @Output() sendEntry: EventEmitter<any> = new EventEmitter();
  
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required ]
    });
  }

  close(): void {
    this.sendEntry.emit(false);
  }

  saveData(): void {
    if(this.registerForm.status === 'VALID') {
      this.sendEntry.emit(this.registerForm.value);
    }
  }

}
