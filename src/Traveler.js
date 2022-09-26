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
        const findTrips = this.allTrips.filter(trip => trip.userID === this.id)
        const sortTrips = findTrips.sort((a, b) => {
            return b.timeStamp - a.timeStamp
        })
        this.myTrips = sortTrips
    }

    calculateTripCost(name, travelers, duration) {
        let lodgingCost;
        let flightCost;

        let findTripCost = this.allTrips.reduce((acc, trip) => {
                if (trip.destination === name) {
                    lodgingCost = duration * trip.estimatedLodgingCostPerDay
                    console.log('LODGING', lodgingCost, flightCost)
                    flightCost = travelers * trip.estimatedFlightCostPerPerson
                }
            acc = (lodgingCost + flightCost) * 1.1
            return acc
        }, 0)
        return findTripCost
    }
    
    calculateSpentOnTripsForYear(destinationData) {
        this.findMyTrips()
        let lodgingCost;
        let flightCost;
        const currentYear = (new Date()).getFullYear().toString();
        const findTripsThisYear = this.myTrips.filter(trip => trip.date.includes(currentYear) && trip.initialStatus === 'approved')

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
    }
}
export default Traveler;