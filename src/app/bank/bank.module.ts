import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankAddComponent } from './bank-add/bank-add.component';
import { ClientService } from './shared/services/client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [BankListComponent, BankEditComponent, BankAddComponent],
  providers: [ClientService]
})
export class BankModule { }
