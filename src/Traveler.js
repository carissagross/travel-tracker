class Traveler {
    constructor(travelerData, allTrips) {
        this.id = travelerData.id;
        this.name = travelerData.name;
        this.type = travelerData.travelerType
        this.allTrips = allTrips.allTripsMaster;
        this.totalSpent = 0;
        this.myTrips = []
    }

    returnTravelerFirstName() {
        return this.name.split(' ')[0]
    }

    findMyTrips() {
        // console.log("THIS TIHNG", this.allTrips)
        const findTrips = this.allTrips.filter(trip => trip.userID === this.id);
        this.myTrips = findTrips
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

 

    // findPendingTrips(tripData) {
    //     const trips = this.findMyTrips(tripData)
    //     const pendingTrips = trips.filter(trip => {
    //         return trip.status === 'pending'
    //     })
    //     return pendingTrips
    // }
    
    calculateSpentOnTripsForYear(destinationData) {
        this.findMyTrips()
        let lodgingCost;
        let flightCost;
        // console.log("MY TRIPS", this.myTrips)
        const currentYear = (new Date()).getFullYear().toString();
        // console.log("CURRENT YEAR", currentYear)
        const findTripsThisYear = this.myTrips.filter(trip => trip.date.includes(currentYear) && trip.initialStatus === 'approved')
        // console.log("1", findTripsThisYear)

        const yearlyTripCost = findTripsThisYear.reduce((acc, trip) => {
            // console.log("INSIDE REDUCE",trip)
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