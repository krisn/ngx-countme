/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CountmeModule, CountmeService } from '../dist/ngx-countme.umd.js';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2>Hi!</h2>
  </div>
  `,
  styles: [`
    .ctid1 { color: red; font-size: 32px; }
    .ctid2 { color: blue; font-size: 24px; }
  `]
})
class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CountmeModule ],
  providers: [
    CountmeService
  ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
