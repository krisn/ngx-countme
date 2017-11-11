/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Rx from 'rxjs/Rx';

import { CountmeModule, CountmeService } from '../dist/ngx-countme.umd.js';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2>ngx-countme!</h2>
    <h3>Input</h3>
    <p><input type="text" [countme] (countmeChange)="cm1Ch($event)" /></p>
    <p>Words: {{cm1 && cm1.words}}, Letters: {{cm1 && cm1.letters}}, Spaces: {{cm1 && cm1.spaces}}</p>
    <h3>Textarea</h3>
    <p><textarea [(countme)]="cm2" (change)="cm2Ch()" ></textarea></p>
    <p>Words: {{cm2 && cm2.words}}, Letters: {{cm2 && cm2.letters}}, Spaces: {{cm2 && cm2.spaces}}</p>
    <h3>Paragraph</h3>
    <p class="paragraph" [(countme)]="cm3">{{sample}}</p>
    <p>Words: {{cm3 && cm3.words}}, Letters: {{cm3 && cm3.letters}}, Spaces: {{cm3 && cm3.spaces}}</p>
  </div>
  `,
  styles: [`
    .paragraph { background-color: #eee; width: 100%; }
  `]
})
class AppComponent implements OnInit {

  counterStart = 2;
  // tslint:disable-next-line:max-line-length
  data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  sample = '';
  cm1: any; cm2: any; cm3: any;

  constructor(private countmeService: CountmeService) {}

  ngOnInit() {

    console.log('Countme', this.countmeService.count('Big old fox jumps over a wall'));

    const arr = this.data.split(' ');
    Rx.Observable
    .timer(1000, 200)
    .take(arr.length)
    .subscribe(val => {
      this.sample += arr[val] + ' ';
    });

  }

  cm1Ch(e) {
    console.log('cm1', this.cm1, this.cm2, e);
  }

  cm2Ch(e) {
    console.log('cm2', this.cm2, this.cm1);
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
