import { EditDialogComponent } from './../dialogs/edit.dialog.component';

import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { AddDialogComponent } from "../dialogs/add.dialog.component";
import { Customer } from "../model/customer.model";
import { HomeService } from "../services/home.service";
import { DeleteDialogComponent } from '../dialogs/delete.dialog.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id', 'name', 'age', 'email','actions'];
  details : any;
  dataSource : MatTableDataSource<Customer>;
  isLoadingResults = true; 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  ngOnInit(){
    this.fetchAll();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngAfterViewInit() {
    
  }
  
   constructor(private authService : AuthService, private api : HomeService, private dialog : MatDialog) {
   
   }
   onRowClicked(row:any) {
    console.log("Row clicked: ", row);
  }

  openDialog(){

    const dialogRef = this.dialog.open(AddDialogComponent, 
      {
        data :{Customer: {}}
      })

  }

  startEdit(i: number, id:number, name: string, age: number, email:string){

    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {id:id, name: name, age: age, email: email}
    });
  }

  startDelete(i: number, id:number, name: string, age: number, email:string){

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id:id, name: name, age: age, email: email}
    });
  }

  fetchAll(): void {
    this.api.getAllCustomers().subscribe((res) =>
    {
     // this.customerData = res;
      this.dataSource.data = res;
      console.log(res);
      this.isLoadingResults=false;

    }, err=>{
      console.log(err);
      this.isLoadingResults = false;
    });
    this.authService.getUserDetails().subscribe((values)=>{
        this.details = values;
        
    })
    
  }

  reload(){
    this.fetchAll();
  }

}
