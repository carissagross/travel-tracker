class Destination {
    constructor(id, destinationName, estLodgingCostPerDay, estFlightCostPerPerson, image, alt) {
        this.id = id;
        this.destinationName = destinationName;
        this.estLodgingCostPerDay = estLodgingCostPerDay;
        this.estFlightCostPerPerson = estFlightCostPerPerson;
        this.image = image;
        this.alt = alt;
    }
}

export default Destination;