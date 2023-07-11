import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

ngOnInit(){

}
  openDialog(){
  this.dialog.open(LoginComponent);
  }

}

