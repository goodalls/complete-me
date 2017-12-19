import Node from './Node.js';

export default class Trie {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(data, node = this.head) {
    let current = this.head;
    //base case
    if (data.length === 0) {
      node.isWord = true;
      return;
    }

    if (!node.keys.has(data[0])) {
      node.keys.set(data[0], new Node());
      this.length += 1;
      return this.insert(data.substr(1), node.keys.get(data[0]));
    } else {
      this.length += 1;
      return this.insert(data.substr(1), node.keys.get(data[0]));
    }
  }

  count() {

  }
}
