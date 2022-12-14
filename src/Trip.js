class Trip {
    constructor(destination, trip) {
        this.initialStatus = trip.status;
        this.id = trip.id;
        this.userID = trip.userID;
        this.destinationID = trip.destinationID;
        this.travelers =  trip.travelers;
        this.date = trip.date;
        this.duration = trip.duration;
        this.suggestedActivities = trip.suggestedActivities;
        this.timeStamp = new Date(this.date).getTime()
        this.currentDate = new Date().getTime()
        this.destinationId = destination.id
        this.destination = destination.destination
        this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay
        this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson
        this.image = destination.image
        this.alt = destination.alt
        this.status = this.findPastTrips()
    }

    findPastTrips() {
        if (this.timeStamp <= this.currentDate) {
            return 'Past Trip' 
        } else {
           return this.initialStatus
        }
    }
}
export default Trip;