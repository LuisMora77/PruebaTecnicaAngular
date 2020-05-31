import { Component, OnInit } from '@angular/core';
import{ClientListServiceService} from '../client-list-service.service'

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

   clientCardsData : any = [] // for storing the json

  constructor(private service: ClientListServiceService) { }

  objectKeys (objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }

  ngOnInit(){
    this.service.getClients().subscribe(data =>{this.clientCardsData = data.results;
    console.log(this.clientCardsData)})
  }

}
