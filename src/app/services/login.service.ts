import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public servicedata = new BehaviorSubject('Basic Approval is required!');
  public checkmessage = this.servicedata.asObservable();
  constructor(private httpClient: HttpClient) { }


   PostData(url: string, data:any) {

         this.httpClient.post(environment.baseUrl + url, data).subscribe(data => {
      console.log(JSON.parse(JSON.stringify(data))) ;
      this.servicedata.next(data.toString());
    },
      error => console.log(error)
    );
  
}

Checkverification(url:string, verify:any){
  this.httpClient.post(environment.baseUrl + url, verify).subscribe(data => {
    console.log(data) ;
  },
    error => console.log(error)
  );
}


}
