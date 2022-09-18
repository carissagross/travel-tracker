import { expect } from 'chai';
import Destination from '../src/Destination';

describe('Destination', () => {
    let destination1;
    let destination2;

    beforeEach(() => {
        destination1 = new Destination({
            id: 1,
            destination: "Lima, Peru",
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 400,
            image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
            alt: "overview of city buildings with a clear sky"
            });

            destination2 = new Destination({
                id: 2,
                destination: "Stockholm, Sweden",
                estimatedLodgingCostPerDay: 100,
                estimatedFlightCostPerPerson: 780,
                image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                alt: "city with boats on the water during the day time"
            });
        });
        
        it('should be a funciton', () => {
            expect(Destination).to.be.a('function')
        });

        it('should be an instance of Destination', () => {
            expect(destination1).to.be.an.instanceOf(Destination)
            expect(destination2).to.be.an.instanceOf(Destination)
        });
});