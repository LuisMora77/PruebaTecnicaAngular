import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  @Input() public client;
  closeResult = ''
  constructor(  private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.client);
    }
}
