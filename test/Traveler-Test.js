import { expect } from 'chai';
import Traveler from '../src/Traveler';

describe('Traveler', () => {
  let traveler1;
  let traveler2;

  beforeEach(() => {
    traveler1 = new Traveler({
        id: 1,
        name: 'Ham Leadbeater',
        travelerType: 'relaxer'
    });

    traveler2 = new Traveler({
        id: 2,
        name: 'Rachael Vaughten',
        travelerType: 'thrill-seeker'
    })
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler)
    expect(traveler2).to.be.an.instanceOf(Traveler)
  });

  it('should have an ID', () => {
    expect(traveler1.id).to.equal(1)
    expect(traveler2.id).to.equal(2)
  });

  it('should have a name', () => {
    expect(traveler1.name).to.equal('Ham Leadbeater')
    expect(traveler2.name).to.equal('Rachael Vaughten')
  });

  it('should have a travel type', () => {
    expect(traveler1.type).to.equal('relaxer')
    expect(traveler2.type).to.equal('thrill-seeker')
  });

  it('should return the first name of the traveler', () => {
    expect(traveler1.returnTravelerFirstName()). to.equal('Ham')
    expect(traveler2.returnTravelerFirstName()). to.equal('Rachael')
  });

});