import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { HttpInterceptorService } from './core/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private http: Http, httpInterceptor: HttpInterceptorService) {
    httpInterceptor.request().addInterceptor((data, method) => {
      console.log(method, data);
      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      res.subscribe(r => console.log(method, r));
      return res;
    });
  }

  ngOnInit(): void {
    this.http.get('/')
      .map(r => r.text())
      .subscribe(console.log);
  }
}
