import stackSize from '../src/index';
import {stackSizeSync} from '../src/index';
import { expect } from 'chai';

describe('Stack Size', ()=> {


  it('should return a number', ()=> {
    expect(typeof stackSizeSync()).to.be.equal('number');
  });

  it('should return a promise of number', ()=> {
    return stackSize().then(function(result) {
      expect(typeof result).to.be.equal('number');
    })
  });

});