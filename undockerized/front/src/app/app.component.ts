import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';
import { DataInterface } from './DataInterface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private api_url = "http://localhost:8080/data";

  constructor(private http: HttpClient){
  }

  getData(){
      this.http.get<DataInterface>(this.api_url).subscribe(response => alert(response.text));
  }

  title = 'Primaa';

}
