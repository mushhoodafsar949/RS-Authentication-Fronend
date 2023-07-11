import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { Logindata, emailverify } from '../model/logindata';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data: Logindata = new Logindata();
  public verify: emailverify = new emailverify();
  message: any = "";
  otp!: string; showOtpComponent = true;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any; config = { allowNumbersOnly: true, length: 6, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "50px", height: "50px", }, };
  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private loginservice: LoginService) {
  }

  ngOnInit() {
    console.log(this.data!.username);
  }
  onOtpChange(otp: any) {
    this.otp = otp;
    if (otp.length == 6) {
      this.validateOtp(this.otp);
    }
  }
  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }
  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = "";
    setTimeout(() => { this.showOtpComponent = true; }, 0);
  }
  validateOtp(codee: any) {

    if (codee != undefined && codee != null) {
      this.verify.verificationcode = codee;
      console.log(this.verify.verificationcode);
      this.loginservice.Checkverification("Authuser/myemailverification/", this.verify);
    }

    else {
      console.log("null error")
    }
  }


  senddata(username: any, password: any) {
    if (username != undefined && username != null && password != undefined && password != null) {
      this.data.username = username;
      this.data.password = password;
      this.loginservice.PostData("Authuser/myauthfunc/", this.data);
      this.loginservice.checkmessage.subscribe(msg => this.message = msg);
    }

    else {
      console.log("null error")
    }

  }


  checkcode(codee: any) {
    if (codee != undefined && codee != null) {
      this.verify.verificationcode = codee;
      console.log(this.verify.verificationcode);
      this.loginservice.Checkverification("Authuser/myemailverification/", this.verify);
    }

    else {
      console.log("null error")
    }
  }

}
