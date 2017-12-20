import Node from './Node.js';

export default class Trie {
  constructor() {
    this.head = new Node(null);
    this.length = 0;
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

  suggest(string) {
    let currNode = this.head.children[string[0]];
    let count = 0;
    const allWords = [];
   
    while (count + 1 < string.length) {
      currNode = currNode.children[string[count + 1]];
      count++;
    }
  

    const getWord = (node, string) => {
      if (node.isWord) {
        allWords.push(string);
      }
      Object.keys(node.children).forEach((branch) => {
        getWord(node.children[branch], string + branch);
      });
    };
  
    getWord(currNode, string);
  
    return allWords;
  }

  // populate(dictionary) {

  // }

  isWordCheck (string) {
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

  // print () {
  //   let words = ;
  //   let search = function(node, string) {
  //     if (node.children.size != 0) {
  //       for (let letter of node.children.children()) {
  //         search(node.children.get(letter), string.concat(letter));
  //       };
  //       if (node.isEnd()) {
  //         words.push(string);
  //       };
  //     } else {
  //       string.length > 0 ? words.push(string) : undefined;
  //       return;
  //     };
  //   };
  //   search(this.root, new String());
  //   return words.length > 0 ? words : mo;
  // };

} 

