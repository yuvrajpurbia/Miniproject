import { Injectable } from '@angular/core';
import { Credentials } from '../../model/credentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  login(credentials: Credentials){
    this.http.post('https://0df3-2405-201-2012-3da5-c9e8-f4ef-8861-8033.ngrok-free.app/user/login', credentials,{})
    .subscribe({
      next:(Response)=>{
        console.log(Response);
      }, 
      error:(mistake)=>{
        console.log(mistake);
      }
      
    })
    console.log(credentials);}
}
