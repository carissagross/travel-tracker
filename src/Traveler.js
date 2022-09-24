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
        const trips = this.findMyTrips(tripData)
        
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
        const trips = this.findMyTrips(tripData)
        let lodgingCost;
        let flightCost;

        let findTripCost = trips.reduce((acc, trip) => {
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

    findPastTrips(tripData) {
        const trips = this.findMyTrips(tripData)
        const currentYear = (new Date()).getFullYear().toString();

        const pastTrips = trips.filter(trip => trip.date < currentYear)
        return pastTrips
    }

    findUpcomingTrips() {
        
    }
    
    calculateSpentOnTripsForYear(tripData, destinationData) {
        const trips = this.findMyTrips(tripData)
        let lodgingCost;
        let flightCost;

        const currentYear = (new Date()).getFullYear().toString();
        const findTripsThisYear = trips.filter(trip => trip.date.includes(currentYear)).filter(trip => trip.status === 'approved')
        console.log(findTripsThisYear)
        
        const yearlyTripCost = findTripsThisYear.reduce((acc, trip) => {
            destinationData.forEach(destination => {
                if (trip.destinationID === destination.id) {
                    lodgingCost = trip.duration * destination.estimatedLodgingCostPerDay
                    flightCost = trip.travelers * destination.estimatedFlightCostPerPerson
                }
            })
            acc = (lodgingCost + flightCost) * 1.1
            return acc
        }, 0)
        return yearlyTripCost

    // getFullYear() method returns the year of the specified date according to local time.
    // new Date() can create a Date instance or return a string representing the current time.
    // toString() method returns a string representing the object.
    
        // a year of trips January to December
        // 1. traveler.id === trip.userID
        // 2. trip.destinationID === destination.id

        // find the date (tripData.date)
        // if (tripData.date.slice(0, 4) === '2022')
        // first four numbers in the date
        // invoke calculateTripCost()
        // trip date year and whatever date you want to bring back
        // increment acc by calculate trip costs
    }
}
export default Traveler;