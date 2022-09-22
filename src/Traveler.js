class Traveler {
    constructor(travelerData) {
        this.id = travelerData.id;
        this.name = travelerData.name;
        this.type = travelerData.travelerType
    }

    returnTravelerFirstName() {
        return this.name.split(' ')[0]
    }


    findAllTravelerTrips(tripData) {
        const findTrips = tripData.filter(trip => trip.userID === this.id)
        return findTrips
    }



    // find total cost of trips
    // 1. traveler.id === trip.userID
    // 2. trip.destinationID === destination.id
    // 3. Trip duration x estimated lodging
    // 4. Flight costs x number of travelers
    // 5. Plus 10% agent fee

    // method to find traveler.id

    // lodgingCost = trips.duration * destination.estimatedLodgingCostPerDay
    // flightCost = trips.travelers * destination.estimatedFlightCostPerPerson
}

export default Traveler;