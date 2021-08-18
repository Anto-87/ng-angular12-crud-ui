import { HomeService } from './../services/home.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete.dialog',
  templateUrl: './delete.dialog.component.html',
  styleUrls: ['./delete.dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: HomeService) { }

    onNoClick(): void {
    this.dialogRef.close();
    }

    confirmDelete(): void {
      
    this.dataService.deleteCustomer(this.data.id).subscribe(
      success =>{ console.log("Successfully deleted")},
      error => {console.log("Ended in error, while deleting customer")}
    )
    }

    ngOnInit(): void {
    }

}
