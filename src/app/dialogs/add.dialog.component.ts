import { HomeService } from './../services/home.service';
import { Customer } from '../model/customer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';

@Component({
    
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.css']
})

export class AddDialogComponent{

    
    constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Customer,
        public api : HomeService){

        }

        submit() {
            // emppty stuff
        }

        close(){
            this.dialogRef.close();
        }

        addNewCustomer(){
            console.log(this.data);
            let  cust:Customer =
            {
                name : this.data.name,
                email : this.data.email,
                age : this.data.age
            };
            this.api.addCustomers(cust).subscribe(
                success =>{ console.log("Successfully saved")},
                error => {console.log("Ended in error, while saving customer")}
            );

    
        }
}