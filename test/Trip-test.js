import { expect } from 'chai';
import Trip from '../src/Trip';
import Traveler from '../src/Traveler';

describe('Trip', () => {
    let tripData;
    let trip1;
    let trip2;
    let trip3;

    beforeEach (() => {
        tripData = [
            {
            id: 117,
            userID: 1,
            destinationID: 28,
            travelers: 3,
            date: "2021/01/09",
            duration: 15,
            status: "approved",
            suggestedActivities: [ ]
            },
            {
            id: 89,
            userID: 2,
            destinationID: 10,
            travelers: 5,
            date: "2019/09/27",
            duration: 13,
            status: "approved",
            suggestedActivities: [ ]
            }, 
            {
            id: 100,
            userID: 2,
            destinationID: 6,
            travelers: 6,
            date: "2020/3/28",
            duration: 10,
            status: "approved",
            suggestedActivities: [ ]
            }, 
            {
            id: 116,
            userID: 2,
            destinationID: 7,
            travelers: 3,
            date: "2020/04/03",
            duration: 8,
            status: "approved",
            suggestedActivities: [ ]
            }
          ];
         
          trip1 = new Trip(tripData[0]);
          trip2 = new Trip(tripData[1]);
          trip3 = new Trip(tripData[2]);
    });

    it('should be a function', () => {
        expect(Trip).to.be.a('function')
    });

    it('should be an instance of Trip', () => {
        expect(trip1).to.be.an.instanceOf(Trip)
        expect(trip2).to.be.an.instanceOf(Trip)
    });

    it('should have an ID', () => {
        expect(trip1.id).to.equal(117)
        expect(trip2.id).to.equal(89)
    });

    it('should find the userID', () => {
        expect(trip1.userID).to.equal(1)
        expect(trip2.userID).to.equal(2)
    });

    it('should have a destination ID', () => {
        expect(trip1.destinationID).to.equal(28)
        expect(trip2.destinationID).to.equal(10)
    });

    it('should have the number of traverlers', () => {
        expect(trip1.travelers).to.equal(3)
        expect(trip2.travelers).to.equal(5)
    });

    it('should have a date of travel', () => {
        expect(trip1.date).to.equal('2021/01/09')
        expect(trip2.date).to.equal('2019/09/27')
    });

    it('should have a trip duration in days', () => {
        expect(trip1.duration).to.equal(15)
        expect(trip2.duration).to.equal(13)
    });

    it('should have a trip status', () => {
        expect(trip1.status).to.equal('approved')
        expect(trip2.status).to.equal('approved')
    });

    it('should have suggested activities', () => {
        expect(trip1.suggestedActivities).to.deep.equal([])
        expect(trip2.suggestedActivities).to.deep.equal([])
    });

    it('should determine the status of each trip', () => {
        expect(trip1.findPastTrips(tripData)).to.equal('approved')
    })
});