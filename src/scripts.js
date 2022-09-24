// IMPORTS //
import './css/styles.css';
import './images/turing-logo.png'

import Traveler from './Traveler'
import Destination from './Destination'
import Trip from './Trip'

import { getTravelersApi, getDestinationsApi, getTripsApi } from './apiCalls'

// GLOBAL VARIALBES //
let travelerData;
let destinationData;
let tripsData;
let traveler;
let destinations;
let trips;

// PROMISE //
function getAllData() {
    Promise.all([getTravelersApi, getDestinationsApi, getTripsApi]).then((data) => {
        travelerData = data[0].travelers
        destinationData = data[1].destinations
        tripsData = data[2].trips
        traveler = new Traveler(travelerData[Math.floor(Math.random() * travelerData.length)])
        destinations = new Destination(destinationData)
        trips = new Trip(tripsData)
        populateDashboard()
    })
}

// QUERY SELECTORS //
const userNameDisplay = document.querySelector('.welcome')
const totalSpent = document.querySelector('.total-spent')
const logoutButton = document.querySelector('.logout-button')
const bookATrip = document.querySelector('.book-trip')
const selectDate = document.getElementById('.select-date-calendar')
const numberOfTravelers = document.getElementById('.number-of-travelers')


// EVENT LISTENERS //
window.addEventListener('load', getAllData())

// HELPER FUNCTIONS //
function populateDashboard() {
    showTravelerName()
}

// DOM MANIPULATION //
function showTravelerName() {
    userNameDisplay.innerText = `Welcome, ${traveler.returnTravelerFirstName()}!`
}




console.log('This is the JavaScript entry file - your code begins here.');
