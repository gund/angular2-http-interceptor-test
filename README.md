# Http Interceptor Playground

> Testing local library Http Interceptor for Angular 2

## Usage

To use it you must first declare providers in your `@NgModule`.  
You have 2 options:  
1. Register `InterceptableHttp` AND override original `Http` service so
that all your requests will be intercepted
2. Register ONLY `InterceptableHttp` and keep original `Http` service so
you can make requests which are intercepted and not.
  
For case #1 use:
```ts
{
    providers: [...HTTP_INTERCEPTOR_PROVIDER]
}
```

For case #2 use:
```ts
{
    providers: [...HTTP_INTERCEPTOR_NO_OVERRIDE_PROVIDER]
}
```

After registering you can use `InterceptableHttp` for your requests
and `Http` if you chose to override it (case #1):
```ts
constructor(private http: Http, httpInterceptor: HttpInterceptorService) {
    httpInterceptor.request().addInterceptor((data, method) => {
      console.log(method, data);
      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      res.subscribe(r => console.log(method, r));
      return res;
    });
    
    this.http.get('/')
          .map(r => r.text())
          .subscribe(console.log);
}
```

In this setup every request and response will be logged to the console.  
You can also cancel request by returning `false` value (that coerce to boolean false)
from one of registered _request_ interceptors.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project.

## Running unit tests

Run `ng test` to execute the unit tests.

***

## License

[MIT](./LICENSE) © 2016 [Alex Malkevich](https://github.com/gund)
