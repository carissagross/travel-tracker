import Trip from '../src/Trip'
// import Destination from '..src/Destination'

class TripsRepo {
    constructor(trips, destinations) {
        this.allTrips = trips;
        this.allDestinations = destinations;
        this.allTripsMaster = this.updateTripDetails()
    }

    updateTripDetails() {
        let tripDetails = this.allTrips.reduce((acc, trip) => {
            this.allDestinations.forEach(destination => {
                if (trip.destinationID === destination.id) {
                    acc.push(new Trip(destination, trip))
                }
            })
            return acc
        }, [])
        return tripDetails
    }

}

export default TripsRepo;