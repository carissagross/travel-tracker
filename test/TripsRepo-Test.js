import { expect } from 'chai';
import Trip from '../src/Trip';
import TripsRepo from '../src/TripsRepo'

describe('TripsRepo', () => {
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

})