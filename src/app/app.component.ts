import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { Http } from '@angular/http';
import { HttpInterceptorService } from 'ng-http-interceptor';

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

    httpInterceptor.request('/my-url').addInterceptor(data => {
      console.log('This wong get called');
      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      return res.do(r => console.log(method, r));
    });
  }

  ngOnInit(): void {
    this.http.get('/')
      .map(r => r.text())
      .subscribe(console.log);
  }
}
