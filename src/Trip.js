class Trip {
    constructor(destination, trip) {
        this.initialStatus = trip.status;
        this.id = trip.id;
        this.userID = trip.userID;
        this.destinationID = trip.destinationID;
        this.travelers =  trip.travelers;
        this.date = trip.date;
        this.duration = trip.duration;
        this.status = this.findPastTrips()
        this.suggestedActivities = trip.suggestedActivities;
        this.timeStamp = new Date(this.date).getTime()
        this.currentDate = new Date().getTime()
        this.destinationId = destination.id
        this.destination = destination.destination
        this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay
        this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson
        this.image = destination.image
        this.alt = destination.alt
    }
    // method to filter status
    // only change the status IF the date is past
    // if date is past === status is 'Past Trips'
    // if date is greater than current date, then status ==== status

    findPastTrips() {
        if (this.timeStamp <= this.currentDate) {
            this.status = 'Past Trip' 
        } else {
            this.initialStatus
        }
    }
}




export default Trip;