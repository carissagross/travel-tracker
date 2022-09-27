import { expect } from 'chai';
import Trip from '../src/Trip';
import TripsRepo from '../src/TripsRepo'

describe('Trip', () => {
    let tripData
    let destinationData
    let tripsRepo
    let trip1
    let trip2
 
    beforeEach (() => {
        tripData = [
            {
            initialStatus: "approved",
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
          ]
          
          destinationData = [
            {
            id: 28,
            destination: "San Juan, Puerto Rico",
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 900,
            image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
            alt: "white and brown concrete buildings near sea under white clouds during daytime"
            },
            {
            id: 10,
            destination: "Toronto, Canada",
            estimatedLodgingCostPerDay: 90,
            estimatedFlightCostPerPerson: 450,
            image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80",
            alt: "city during the day near a beatiful body of water"
            },
            {
            id: 6,
            destination: "Jakarta, Indonesia",
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 890,
            image: "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "lit up city at night"
            },
            {
            id: 7,
            destination: "Paris, France",
            estimatedLodgingCostPerDay: 100,
            estimatedFlightCostPerPerson: 395,
            image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
            alt: "city during the day time with eiffel tower"
            },
        ]

        tripsRepo = new TripsRepo(tripData, destinationData)
        trip1 = tripsRepo.allTripsMaster[0]
        trip2 = tripsRepo.allTripsMaster[1]
    })

    it('should be a function', () => {
        expect(Trip).to.be.a('function')
    })

    it('should be an instance of Trip', () => {
        expect(trip1).to.be.an.instanceOf(Trip)
        expect(trip2).to.be.an.instanceOf(Trip)
    })

    it('should have an inital status', () => {
        expect(trip1.initialStatus).to.equal('approved')
        expect(trip2.initialStatus).to.equal('approved')
    })

    it('should have an ID', () => {
        expect(trip1.id).to.equal(117)
        expect(trip2.id).to.equal(89)
    })

    it('should find the userID', () => {
        expect(trip1.userID).to.equal(1)
        expect(trip2.userID).to.equal(2)
    })

    it('should have a destination ID', () => {
        expect(trip1.destinationID).to.equal(28)
        expect(trip2.destinationID).to.equal(10)
    })

    it('should have the number of traverlers', () => {
        expect(trip1.travelers).to.equal(3)
        expect(trip2.travelers).to.equal(5)
    })

    it('should have a date of travel', () => {
        expect(trip1.date).to.equal('2021/01/09')
        expect(trip2.date).to.equal('2019/09/27')
    })

    it('should have a trip duration in days', () => {
        expect(trip1.duration).to.equal(15)
        expect(trip2.duration).to.equal(13)
    })

    it('should have suggested activities', () => {
        expect(trip1.suggestedActivities).to.deep.equal([])
        expect(trip2.suggestedActivities).to.deep.equal([])
    })

    it('should have a time stamp', () => {
        expect(trip1.timeStamp).to.equal(1610175600000)
        expect(trip2.timeStamp).to.equal(1569564000000)
    })

    it('should have a destination id', () => {
        expect(trip1.destinationId).to.equal(28)
        expect(trip2.destinationId).to.equal(10)
    })

    it('should have a destination name', () => {
        expect(trip1.destination).to.equal('San Juan, Puerto Rico')
        expect(trip2.destination).to.equal('Toronto, Canada')
    })

    it('should have a destination name', () => {
        expect(trip1.destination).to.equal('San Juan, Puerto Rico')
        expect(trip2.destination).to.equal('Toronto, Canada')
    })

    it('should have an estimated lodging cost per day', () => {
        expect(trip1.estimatedLodgingCostPerDay).to.equal(70)
        expect(trip2.estimatedLodgingCostPerDay).to.equal(90)
    })

    it('should have an estimated flight cost per person', () => {
        expect(trip1.estimatedFlightCostPerPerson).to.equal(900)
        expect(trip2.estimatedFlightCostPerPerson).to.equal(450)
    })

    it('should have an image', () => {
        expect(trip1.image).to.equal('https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80')
        expect(trip2.image).to.equal('https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80')
    })

    it('should have alternate text for an image', () => {
        expect(trip1.alt).to.equal('white and brown concrete buildings near sea under white clouds during daytime')
        expect(trip2.alt).to.equal('city during the day near a beatiful body of water')
    })

    it('should determine the status of each trip', () => {
        expect(trip1.findPastTrips()).to.equal('Past Trip')
        expect(trip2.findPastTrips()).to.equal('Past Trip')
    })
})