import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { HttpInterceptorService } from './core/http/http-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private http: Http, httpInterceptor: HttpInterceptorService) {
    httpInterceptor.request().addInterceptor(data => {
      console.log(data);
      return data;
    });

    httpInterceptor.response().addInterceptor(res => {
      res.subscribe(r => console.log(r));
      return res;
    });
  }

  ngOnInit(): void {
    this.http.get('/')
      .map(r => r.text())
      .subscribe(res => console.log(res));
  }
}
