import { expect } from 'chai';
import Destination from '../src/Destination';

describe('Destination', () => {
    let destinationData;
    let destination1;
    let destination2;
    let destination3;

    beforeEach(() => {
        destinationData = [
            {
            id: 28,
            destination: "San Juan, Puerto Rico",
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 900,
            image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
            alt: "white and brown concrete buildings near sea under white clouds during daytime"
            },
            {
            id: 10,
            destination: "Toronto, Canada",
            estimatedLodgingCostPerDay: 90,
            estimatedFlightCostPerPerson: 450,
            image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
            },
            {
            id: 6,
            destination: "Jakarta, Indonesia",
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 890,
            image: "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "lit up city at night"
            },
            {
            id: 7,
            destination: "Paris, France",
            estimatedLodgingCostPerDay: 100,
            estimatedFlightCostPerPerson: 395,
            image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
            alt: "city during the day time with eiffel tower"
            },
        ]
          destination1 = new Destination(destinationData[0])
          destination2 = new Destination(destinationData[1])
          destination3 = new Destination(destinationData[2])
        });
        
        it('should be a funciton', () => {
            expect(Destination).to.be.a('function')
        });

        it('should be an instance of Destination', () => {
            expect(destination1).to.be.an.instanceOf(Destination)
            expect(destination2).to.be.an.instanceOf(Destination)
        });

        it('should have an ID', () => {
            expect(destination1.id).to.equal(28)
            expect(destination2.id).to.equal(10)
        });

        it('should have a name of the destination', () => {
            expect(destination1.destination).to.equal('San Juan, Puerto Rico')
            expect(destination2.destination).to.equal('Toronto, Canada')
        });

        it('should have an estimated lodging cost per day', () => {
            expect(destination1.estimatedLodgingCostPerDay).to.equal(70)
            expect(destination2.estimatedLodgingCostPerDay).to.equal(90)
        });

        it('should have an estimated flight cost per person', () => {
            expect(destination1.estimatedFlightCostPerPerson).to.equal(900)
            expect(destination2.estimatedFlightCostPerPerson).to.equal(450)
        });

        it('should have an image', () => {
            expect(destination1.image).to.equal('https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80')
            expect(destination2.image).to.equal('https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80')
        });

        it.skip('should have alternate text for an image', () => {
            expect(destination1.alt).to.equal('white and brown concrete buildings near sea under white clouds during daytime')
            expect(destination2.alt).to.equal('city with boats on the water during the day time')
        });
});