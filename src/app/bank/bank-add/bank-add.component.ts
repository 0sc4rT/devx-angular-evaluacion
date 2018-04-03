import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent implements OnInit {

  client: any = {
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

  constructor(private service: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  addClient(client: any): void {
    this.service.createClient(client)
      .subscribe((result) => {
        this.router.navigate(['/']);
      });
  }

}
