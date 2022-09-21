class Traveler {
    constructor(traveler) {
        this.id = traveler.id;
        this.name = traveler.name;
        this.type = traveler.travelerType
        this.trips = []
    }

    returnTravelerFirstName() {
        return this.name.split(' ')[0]
    }
}

export default Traveler;