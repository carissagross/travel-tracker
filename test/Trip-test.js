import { expect } from 'chai';
import Trip from '../src/Trip';

describe('Trip', () => {
    let trip1;
    let trip2;

    beforeEach (() => {
        trip1 = new Trip({
            id: 1,
            userID: 44,
            destinationID: 49,
            travelers: 1,
            date: "2022/09/16",
            duration: 8,
            status: "approved",
            suggestedActivities: [ ]
        });

        trip2 = new Trip({
            id: 2,
            userID: 35,
            destinationID: 25,
            travelers: 5,
            date: "2022/10/04",
            duration: 18,
            status: "approved",
            suggestedActivities: [ ]
        });
    });

    it('should be a function', () => {
        expect(Trip).to.be.a('function')
    });

    it('should be an instance of Trip', () => {
        expect(trip1).to.be.an.instanceOf(Trip)
        expect(trip2).to.be.an.instanceOf(Trip)
    });

    it('should have an ID', () => {
        expect(trip1.id).to.equal(1)
        expect(trip2.id).to.equal(2)
    });

    it('should find the userID', () => {
        expect(trip1.userID).to.equal(44)
        expect(trip2.userID).to.equal(35)
    });

    it('should have a destination ID', () => {
        expect(trip1.destinationID).to.equal(49)
        expect(trip2.destinationID).to.equal(25)
    });

    it('should have the number of traverlers', () => {
        expect(trip1.travelers).to.equal(1)
        expect(trip2.travelers).to.equal(5)
    });

    it('should have a date of travel', () => {
        expect(trip1.date).to.equal('2022/09/16')
        expect(trip2.date).to.equal('2022/10/04')
    });

    it('should have a trip duration in days', () => {
        expect(trip1.duration).to.equal(8)
        expect(trip2.duration).to.equal(18)
    });

    it('should have a trip status', () => {
        expect(trip1.status).to.equal('approved')
        expect(trip2.status).to.equal('approved')
    });

    it('should have suggested activities', () => {
        expect(trip1.suggestedActivities).to.deep.equal([])
        expect(trip2.suggestedActivities).to.deep.equal([])
    });
});