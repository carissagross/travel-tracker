class Trip {
    constructor(tripData) {
        this.id = tripData.id;
        this.userID = tripData.userID;
        this.destinationID = tripData.destinationID;
        this.travelers =  tripData.travelers;
        this.date = tripData.date;
        this.duration = tripData.duration;
        this.status =tripData.status;
        this.suggestedActivities = tripData.suggestedActivities;
    }

    // findPendingTrips(tripData) {
    //     const findPendingTrips = tripData.filter(trip => trip.status === 'pending')
    //     return findPendingTrips
    // }

    // findApprovedTrips(tripData) {
    //     const findApprovedTrips = tripData.filter(trip => trip.status === 'approved')
    //     return findApprovedTrips
    // }
}

export default Trip;