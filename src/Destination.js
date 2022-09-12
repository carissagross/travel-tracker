class Destination {
    constructor(destination) {
        this.id = destination.id;
        this.name = destination.name;
        this.lodging = destination.estLodgingCostPerDay;
        this.flights = destination.estFlightCostPerPerson;
        this.image = destination.image;
        this.alt = destination.alt;
    }
}

export default Destination;