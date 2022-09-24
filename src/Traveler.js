class Traveler {
    constructor(travelerData) {
        this.id = travelerData.id;
        this.name = travelerData.name;
        this.type = travelerData.travelerType
    }

    returnTravelerFirstName() {
        return this.name.split(' ')[0]
    }

    findMyTrips(tripData) {
        const findTrips = tripData.filter(trip => trip.userID === this.id)
        return findTrips
    }

    findMyDestinations(tripData, destinationData) {
        let trips = this.findMyTrips(tripData)
        
        let destinations = trips.reduce((acc, trip) => {
            destinationData.forEach(destination => {
                if (trip.destinationID === destination.id) {
                    acc.push(destination)
                }
            })
            return acc
        }, [])
        return destinations
    }

    calculateTripCost(tripData, destinationData) {
        let findTrips = this.findMyTrips(tripData)
        let lodgingCost;
        let flightCost;

        let findTripCost = findTrips.reduce((acc, trip) => {
            destinationData.forEach(destination => {
                if (trip.destinationID === destination.id) {
                    lodgingCost = trip.duration * destination.estimatedLodgingCostPerDay
                    flightCost = trip.travelers * destination.estimatedFlightCostPerPerson
                }
            })
            acc = (lodgingCost + flightCost) * 1.1
            return acc
        }, 0)
        return findTripCost
    }
    
    calculateSpentOnTripsForYear(tripData, destinationData) {
    
        // a year of trips January to December
        // 1. traveler.id === trip.userID
        // 2. trip.destinationID === destination.id

        // find the date (tripData.date)
        // if (tripData.date.slice(0, 4) === '2022')
        // first four numbers in the date
        // invoke calculateTripCost()
        // trip date year and whatever date you want to bring back
        // increment acc by calculate trip costs
    // }

  
    }
}
export default Traveler;