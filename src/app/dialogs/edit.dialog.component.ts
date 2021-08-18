import { HomeService } from './../services/home.service';
import { Customer } from './../model/customer.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit.dialog',
  templateUrl: './edit.dialog.component.html',
  styleUrls: ['./edit.dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<EditDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Customer,
              public api: HomeService) { }

  ngOnInit(): void {
  }

  submit() {
   
  }

  closeDialog(){
    this.dialog.close();
  }

  update(){
    let  cust:Customer =
            { 

              id : this.data.id, 
              name : this.data.name,
              email : this.data.email,
              age : this.data.age
            };
            this.api.updateCustomers(this.data.id, cust).subscribe(
                success =>{ console.log("Successfully updated")},
                error => {console.log("Ended in error, while updating customer")}
            );

  }
}
