import { expect } from 'chai';
import Trie from '../lib/Trie';

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should be a thing', () => {
    expect(trie).to.exist;
  });

  describe('INSERT', () => {
    it('should add nodes as letters into the trie', () => {

      trie.insert('apple');
      // console.log(JSON.stringify(trie, null, 4));
      expect(trie.head.children.a.data).to.equal('a');
      expect(trie.head.children.a.children.p.data).to.equal('p');
    });

    //should check isWord is true
    //should check length++
  });

  describe('COUNT', () => {
    it('should return the word count that has been entered into the trie', () => {

    });
  });




















});
