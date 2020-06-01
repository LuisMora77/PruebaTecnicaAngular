import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  @Input() public client;
  public clientData = {
    id: "",
    name: ""
  }
  constructor(  private modalService: NgbModal) { }

  cerrar() {
    this.modalService.dismissAll(OrderModalComponent);
  }

  ngOnInit() {
    this.clientData.id = this.client.id;
    this.clientData.name = this.client.name;
    }
}
