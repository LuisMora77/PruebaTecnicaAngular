import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientCardComponent } from './client-card/client-card.component';
import {ClientListServiceService} from './client-list-service.service'
import { HttpClientModule } from '@angular/common/http';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { OrderCardComponent } from './order-card/order-card.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientCardComponent,
    OrderModalComponent,
    OrderCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderModalComponent]
})
export class AppModule { }
