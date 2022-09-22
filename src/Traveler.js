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
        
        let findDestinations = trips.reduce((acc, trip) => {
            destinationData.forEach(destination => {
                if (trip.destinationID === destination.id) {
                    acc.push(destination)
                }
            })
            return acc
        }, [])
        return findDestinations
    }

    // calculateTotalAmountSpentOnTrips(tripData, destinationData) {

    //     let lodgingCost = tripData.duration * destinationData.estimatedLodgingCostPerDay
    //     let flightCost = tripData.travelers * destinationData.estimatedFlightCostPerPerson
    //     let totalTripCost = lodgingCost + flightCost
    // }



    // find total cost of trips
    // 1. traveler.id === trip.userID
    // 2. trip.destinationID === destination.id
    // 3. Trip duration x estimated lodging
    // 4. Flight costs x number of travelers
    // 5. Plus 10% agent fee

    // method to find traveler.id
    // how to find the year of costs

    // lodgingCost = trips.duration * destination.estimatedLodgingCostPerDay
    // flightCost = trips.travelers * destination.estimatedFlightCostPerPerson
}
export default Traveler;