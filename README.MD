# ngx-countme

Angular 2+ custom directive that counts the number of words, letters, numbers, characters, and spaces in any text-based HTML or FORM element. Dynamically updates when the content inside the element is modified as well. 

[Preview in Plunker](https://plnkr.co/4ixQIdmUN0xsozODyDmw)

[![npm version](https://badge.fury.io/js/ngx-countme.svg)](https://badge.fury.io/js/ngx-countme)
[![license](https://img.shields.io/npm/l/ngx-countme.svg)](https://www.npmjs.com/package/ngx-countme)


## Installation

[![NPM](https://nodei.co/npm/ngx-countme.png?downloads=true&stars=true)](https://nodei.co/npm/ngx-countme/)

To install this library, run:

```bash
$ npm install ngx-countme --save
```

## Usage

Add the directive in any element of your Angular application's template:

```html
<!-- You can now use your library component in app.component.html -->
<h1>{{title}}</h1>
<textarea [(countme)]="result"></textarea>
<p>Words: {{result && result.words}}, Letters: {{result && result.letters}}, Spaces: {{result && result.spaces}}</p>
```

In your Angular `AppModule`, import the library then use the `CountmeService` to count any text in your application logic:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library
import { CountmeModule, CountmeService } from 'ngx-countme';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    // Specify the library as an import
    CountmeModule
  ],
  providers: [ CountmeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

@Component()
class AppComponent implements OnInit {
  result: any;
  // Inject the service into your component
  constructor(private countmeService: CountmeService) {}
  ngOnInit() {
    // Use the service to count any string or text
    console.log('Countme', this.countmeService.count('Big old fox jumps over a wall'));
  }
}
```


## Parameters

Parameter | Type | Default | Description 
--- | --- | --- | ---
**countme** | *json* | `null` | Results as JSON object



## License

MIT © [Kris Nyunt](mailto:kris.nyunt@gmail.com)