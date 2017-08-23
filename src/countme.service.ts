import { Injectable } from '@angular/core';

@Injectable()
export class CountmeService {

  private result: any = {
    // tabs: 0,
    spaces: 0,
    chars: 0,
    words: 0,
    numbers: 0,
    letters: 0,
    // specials: 0
  };

  constructor() {
  }

  count(input: string, options: any = {chars: true, words: true}) {

    if (!input) { return this.result; }

    // input = input.trim();
    const spaces = input.match(/([\s]+)/g);
    this.result.spaces = spaces ? spaces.length : 0;
    this.result.chars = input.length - this.result.spaces;

    if (options.numbers) {
      const numbers =  input.match(/[0-9]/g);
      this.result.numbers = numbers ? numbers.length : 0;
    } else {
      delete this.result.numbers;
    }

    if (options.letters) {
      const letters = input.match(/[a-zA-Z]/g);
      this.result.letters = letters ? letters.length : 0;
    } else {
      delete this.result.letters;
    }

    if (options.words) {
      // replace all non letters (so we don't count 1 as a word)
      // split on whitespace
      const words = input.replace(/[^a-zA-Z\s]/g, '').split(/[\s]+/);
      this.result.words = words ? words.length : 0;
    } else {
      delete this.result.words;
    }

    return this.result;

  }
}
