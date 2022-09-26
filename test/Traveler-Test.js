import { expect } from 'chai';
import Traveler from '../src/Traveler';
// import Trip from '../src/Trip';
// import Destination from '../src/Destination';
import TripsRepo from '../src/TripsRepo'

describe('Traveler', () => {
  let travelerData
  let tripsRepo
  let traveler1
  let traveler2
  let tripData
  // let trip1
  // let trip2
  // let trip3
  let destinationData
  // let destination1
  // let destination2
  // let destination3

  beforeEach(() => {
    travelerData = [
        {
          "id": 1,
          "name": "Ham Leadbeater",
          "travelerType": "relaxer",
        },
        {
          "id": 2,
          "name": "Rachael Vaughten",
          "travelerType": "thrill-seeker",
        }
      ]

    
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
          date: "2022/3/28",
          duration: 10,
          status: "approved",
          suggestedActivities: [ ]
          }, 
          {
          id: 116,
          userID: 2,
          destinationID: 7,
          travelers: 3,
          date: "2022/04/03",
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
          image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
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
        // trip1 = new Trip(tripData[0]);
        // trip2 = new Trip(tripData[1]);
        // trip3 = new Trip(tripData[2]);

        tripsRepo = new TripsRepo(tripData, destinationData)
        traveler1 = new Traveler(travelerData[0], tripsRepo)
        traveler2 = new Traveler(travelerData[1], tripsRepo)

        // destination1 = new Destination(destinationData[0])
        // destination2 = new Destination(destinationData[1])
        // destination3 = new Destination(destinationData[2])
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

  it.only('should find all user trips', () => {
    traveler1.findMyTrips();
    expect(traveler1.myTrips).to.deep.equal([{
      alt: "white and brown concrete buildings near sea under white clouds during daytime",
      currentDate: 1664202967666,
      date: "2021/01/09",
      destination: "San Juan, Puerto Rico",
      destinationID: 28,
      destinationId: 28,
      duration: 15,
      estimatedFlightCostPerPerson: 900,
      estimatedLodgingCostPerDay: 70,
      id: 117,
      image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
      initialStatus: "approved",
      status: [undefined],
      suggestedActivities: [],
      timeStamp: 1610175600000,
      travelers: 3,
      userID: 1
      }
    ]
   );
    expect(traveler2.findMyTrips(tripData)).to.deep.equal([{
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
      date: "2022/3/28",
      duration: 10,
      status: "approved",
      suggestedActivities: [ ]
      }, 
      {
      id: 116,
      userID: 2,
      destinationID: 7,
      travelers: 3,
      date: "2022/04/03",
      duration: 8,
      status: "approved",
      suggestedActivities: [ ]
    }]);
  });

    // it('should find all user destinations', () => {
    //   expect(traveler1.findMyDestinations(tripData, destinationData)).to.deep.equal([{
    //     id: 28,
    //     destination: "San Juan, Puerto Rico",
    //     estimatedLodgingCostPerDay: 70,
    //     estimatedFlightCostPerPerson: 900,
    //     image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
    //     alt: "white and brown concrete buildings near sea under white clouds during daytime"
    //   }])
    //   expect(traveler2.findMyDestinations(tripData, destinationData)).to.deep.equal([{
    //     id: 10,
    //     destination: "Toronto, Canada",
    //     estimatedLodgingCostPerDay: 90,
    //     estimatedFlightCostPerPerson: 450,
    //     image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
    //     },
    //     {
    //     id: 6,
    //     destination: "Jakarta, Indonesia",
    //     estimatedLodgingCostPerDay: 70,
    //     estimatedFlightCostPerPerson: 890,
    //     image: "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    //     alt: "lit up city at night"
    //     },
    //     {
    //     id: 7,
    //     destination: "Paris, France",
    //     estimatedLodgingCostPerDay: 100,
    //     estimatedFlightCostPerPerson: 395,
    //     image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    //     alt: "city during the day time with eiffel tower"
    //   }])
    // });

    it('should calculate trip costs', () => {
      expect(traveler1.calculateTripCost(tripData, destinationData)).to.equal(4125)
      expect(traveler2.calculateTripCost(tripData, destinationData)).to.equal(2183.5)
    })

    it('should calculate total amount spent on trips for the past year', () => {
      expect(traveler1.calculateSpentOnTripsForYear(tripData, destinationData)).to.equal(0)
      expect(traveler2.calculateSpentOnTripsForYear(tripData, destinationData)).to.equal(0)
    });
});