import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'appty-UI-challenge';
  response:any;

  constructor(private http: HttpClient){
    this.http.get('assets/data.json').subscribe((res) => {
      this.response =  res;
    });
  }

}
