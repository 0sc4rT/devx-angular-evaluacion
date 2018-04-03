import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/model/client';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'bank-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  clients: Client[];
  readonly defaultImage: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.getClients()
      .subscribe((result: Client[]) => {
        this.clients = result;
      });
  }

  deleteClient(client: Client) {
    this.service.deleteClient(client.id)
      .subscribe((result: any) => {
        this.service.getClients()
          .subscribe((result: Client[]) => {
            this.clients = result;
          });
      });
  }
}
