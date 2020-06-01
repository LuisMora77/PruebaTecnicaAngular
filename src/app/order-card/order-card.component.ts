import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service'

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

clientOrdersData: any = [] // for storing the json
  constructor(private service: OrdersService) { }

  ngOnInit() {
    this.service.getOrders().subscribe(data =>{
      this.clientOrdersData = data.results;
      console.log(this.clientOrdersData);
    })
  }

}