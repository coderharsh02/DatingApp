import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';

  users: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("http://localhost:5080/api/users").subscribe({
      next: (response) => {
        this.users = response;
        console.log(this.users);
      }, error: (error) => {
        console.log(error);
      }
    })
  }
}
