import { Component, OnInit, Input } from '@angular/core';
import { ClientListServiceService } from '../client-list-service.service'

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { OrderModalComponent } from '../order-modal/order-modal.component'

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

 

  clientCardsData: any = []
  closeResult: string;
  modalOptions: NgbModalOptions;

  public client = {
    id: "",
    name: ""
  }

  constructor(private service: ClientListServiceService, private modalService: NgbModal) {
    this.modalOptions = {

    }
  }

  open(id, name) {
    this.client.id = id;
    this.client.name = name;
    const modalRef = this.modalService.open(OrderModalComponent);
    modalRef.componentInstance.client = this.client;
  }

  ngOnInit() {
    this.service.getClients().subscribe(data => {
      this.clientCardsData = data.results;
      console.log(this.clientCardsData)
    })
  }

}
