import { Injectable } from '@angular/core';

@Injectable()
export class CountmeService {

  result: any = {
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
    this.result.spaces = input.match(/([\s]+)/g).length;
    this.result.chars = input.length - this.result.spaces;

    if (options.numbers) {
      this.result.numbers = input.match(/[0-9]/g).length;
    } else {
      delete this.result.numbers;
    }

    if (options.letters) {
      this.result.letters = input.match(/[a-zA-Z]/g).length;
    } else {
      delete this.result.letters;
    }

    if (options.words) {
      // replace all non letters (so we don't count 1 as a word)
      // split on whitespace
      this.result.words = input.replace(/[^a-zA-Z\s]/g, '').split(/[\s]+/).length;
    } else {
      delete this.result.words;
    }

    return this.result;

  }
}
