import { Component, OnInit, Input } from '@angular/core';
import {OrdersService} from '../orders.service'

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input() client;

clientOrdersData: any = []
  constructor(private service: OrdersService) { }

  ngOnInit() {
    this.service.getOrders().subscribe(data =>{
      this.clientOrdersData = data.results;
    })
  }

}
