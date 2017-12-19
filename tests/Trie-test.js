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

  describe('insert', () => {
    it('should add nodes as letters into the trie', () => {
      trie.insert('apple');
    
    });
  });

});
