import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../shared/services/client.service';
import { Client } from '../shared/model/client';

@Component({
  selector: 'bank-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  client: Client = {
    id: '',
    gender: '',
    name: {
      first: '',
      last: '',
    },
    location: {
      street: ''
    },
    email: '',
    picture: {
      medium: ''
    }
  };

  constructor(private activatedRoute: ActivatedRoute,
    private service: ClientService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.service.getClient(params.id)
          .subscribe(result => {
            console.log(result);
            this.client = result;
          });
      });
  }

  editClient(client: Client): void {
    this.service.updateClient(client)
      .subscribe((result) => {
        this.router.navigate(['/']);
      });
  }

}
