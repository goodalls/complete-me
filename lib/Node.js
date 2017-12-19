export default class Node {
  constructor(data, next = null) {
    this.keys = new Map();
    this.data = data;
    this.next = next;
    this.isWord = false;
  }
}