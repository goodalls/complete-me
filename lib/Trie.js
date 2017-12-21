import Node from './Node.js';

export default class Trie {
  constructor() {
    this.head = new Node(null);
    this.length = 0;
    this.suggestArray = [];
  }

  insert(data, node = this.head) {
    //base case
    if (data.length === 0) {
      this.length += 1;
      node.isWord = true;
      return;
    }
    
    if (!node.children[data[0]]) {
      node.children[data[0]] = new Node(data[0]);
      return this.insert(data.substr(1), node.children[data[0]]);
    } else {
      //if letter node does exist then use the node and next letter
      return this.insert(data.substr(1), node.children[data[0]]);
    }
  }

  count() {
    return this.length;
  }

  suggest (string) {
    this.suggestArray = [];
    let wordArray = [...string];
    let current = this.head;

    wordArray.forEach((value) => {
      if (current && current.children) {
        current = current.children[value];
      }
    });

    if (!current || !current.children) {
      return '[]';
    } else {
      return this.findSuggestions(current, string);
    }
  }

  findSuggestions (current, string) {
    let nextLetter = Object.keys(current.children);

    //base case
    if (current.isWord) {
      this.suggestArray.push({ word: string, favored: current.favored});
    }
    nextLetter.forEach((value) => {
      this.findSuggestions(current.children[value], string + value);
    });

    return this.suggestionsSort(this.suggestArray);
  }

  suggestionsSort(array) {
      array.sort((a, b) => 
      b.favored - a.favored 
    );
    return array.map(object => 
      object.word
    );
  }

  populate() {
    const fs = require('fs');
    const text = "/usr/share/dict/words";
    const dictionary = fs.readFileSync(text).toString().trim().split('\n');

    dictionary.forEach((word)=>{
      this.insert(word);
    });
  }

  isWordCheck(string) {
    let node = this.head;

    while (string.length > 1) {
      if (!node.children[string[0]]) {
        return false;
      } else {
        node = node.children[string[0]];
        string = string.substr(1);
      }
    }
    return (node.children[string] && node.children[string].isWord) ? true : false;
  }

  selectFavored(string) {
    // iterates tot eh end of the word and updates the favored
    let current = this.head;
    let wordArray = [...string];

    wordArray.forEach((letter) => {
      current = current.children[letter];
    });

    current.favored++;
  }

  delete(string) {
    let node = this.head;

    while (string.length > 1) {
      if (!node.children[string[0]]) {
        return false;
      } else {
        node = node.children[string[0]];
        string = string.substr(1);
      }
    }
    if (node.children[string].isWord) {
      node.children[string].isWord = false;
    }
  }
} 

