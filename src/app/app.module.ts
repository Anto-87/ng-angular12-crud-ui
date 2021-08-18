import { EditDialogComponent } from './dialogs/edit.dialog.component';
import { AddDialogComponent } from './dialogs/add.dialog.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './material.module';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './auth/auth.guard';
import { MatTableModule } from '@angular/material/table';
import { DeleteDialogComponent } from './dialogs/delete.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTableModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
