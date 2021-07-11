import { Component, OnInit, OnDestroy } from '@angular/core';
// Modals and config
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Subscription
import { Subscription } from 'rxjs';
// Interface
import { Duty } from '../../interfaces/duty';
// Service
import { ToolsService } from '../../services/tools.service';
// Modals
import { DeleteComponent } from '../modals/delete/delete.component';
import { CreateUpdateDutyComponent } from '../modals/create-update-duty/create-update-duty.component';
import { ShowDutyComponent } from '../modals/show-duty/show-duty.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public dutiesList: Duty[] = [];
  getDutiesSubscription: Subscription;
  modalCreateSubscription: Subscription;
  createSubscription: Subscription;
  modalViewSubscription: Subscription;
  viewSubscription: Subscription;
  modalUpdateSubscription: Subscription;
  updateSubscription: Subscription;
  modalDeleteSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(private toolService: ToolsService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getDuties();
  }

  ngOnDestroy() {
    this.getDutiesSubscription.unsubscribe();
    this.modalCreateSubscription.unsubscribe();
    this.createSubscription.unsubscribe();
    this.modalViewSubscription.unsubscribe();
    this.viewSubscription.unsubscribe();
    this.modalUpdateSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
    this.modalDeleteSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
  }

  getDuties() {
    this.getDutiesSubscription = this.toolService.getDuties().subscribe(res => {
      this.dutiesList = res.data.getDuties;
    });
  }

  createDuty() {
    const modalCreate = this.modalService.open(CreateUpdateDutyComponent);
    modalCreate.componentInstance.data = {
      type: 'create',
      id: '',
      name: ''
    };
    this.modalCreateSubscription = modalCreate.componentInstance.sendEntry.subscribe(res => {
      if (res) {
        this.createSubscription = this.toolService.createDuty(res.name).subscribe(res => {
          console.log(res.data.createDuty.name + ' was created!');
          this.getDuties();
        }),
        error => {
          console.log('error createDuty', error);
        };
      }
      modalCreate.close();
    });
  }

  viewDuty(duty: Duty) {
    const modalView = this.modalService.open(ShowDutyComponent);
    modalView.componentInstance.data = {
      type: 'view',
      id: duty._id,
      name: duty.name
    };
    this.modalViewSubscription = modalView.componentInstance.sendEntry.subscribe(res => {
      if (res) {
        this.viewSubscription = this.toolService.viewDuty(duty._id).subscribe(res => {
          console.log(res.data.viewDuty.name + ' was view!');
        }),
        error => {
          console.log('error viewDuty', error);
        };
      }
      modalView.close();
    });
  }

  updateDuty(duty: Duty) {
    const modalUpdate = this.modalService.open(CreateUpdateDutyComponent);
    modalUpdate.componentInstance.data = {
      type: 'update',
      id: duty._id,
      name: duty.name
    };
    this.modalUpdateSubscription = modalUpdate.componentInstance.sendEntry.subscribe(res => {
      if (res) {
        this.updateSubscription = this.toolService.updateDuty(duty._id, res.name).subscribe(res => {
          console.log(res.data.updateDuty.name + ' was updated!');
        }),
        error => {
          console.log('error updateDuty', error);
        };
      }
      modalUpdate.close();
    });
  }

  deleteDuty(idDuty: string) {
    const modalDelete = this.modalService.open(DeleteComponent);
    modalDelete.componentInstance.data = {
      id: idDuty
    };
    this.modalDeleteSubscription = modalDelete.componentInstance.sendEntry.subscribe(res => {
      if (res) {
        this.deleteSubscription = this.toolService.deleteDuty(idDuty).subscribe(res => {
          console.log(res.data.deleteDuty.name + ' was deleted!');
          this.getDuties();
        }),
        error => {
          console.log('error deleteDuty', error);
        };
      }
      modalDelete.close();
    });
  }

}
