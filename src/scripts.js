// IMPORTS //
import './css/styles.css';
// import './images/turing-logo.png'
// import './images/DSC04153.png'

import Traveler from './Traveler'
import Destination from './Destination'
import Trip from './Trip'

import { getTravelersApi, getDestinationsApi, getTripsApi } from './apiCalls'
import TripsRepo from './TripsRepo';

// GLOBAL VARIALBES //
let travelerData;
let destinationData;
let tripData;
let traveler;
let destinations;
let allTrips;
let trips;

// PROMISE //
function getAllData() {
    Promise.all([getTravelersApi, getDestinationsApi, getTripsApi]).then((data) => {
        travelerData = data[0].travelers
        destinationData = data[1].destinations
        tripData = data[2].trips
        allTrips = new TripsRepo(tripData, destinationData)
        traveler = new Traveler(travelerData[43], allTrips)
        // destinations = new Destination(destinationData)
        // trips = new Trip(tripData)
        populateDashboard()
        //pass in id for single customer from login
    })
}
// POST API DATA //

// QUERY SELECTORS //
const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const signInButton = document.querySelector('.sign-in-button')
const userNameDisplay = document.querySelector('.welcome')
const totalSpent = document.querySelector('.total-spent')
const tripCardContainer = document.querySelector('.trip-card-container')
const logoutButton = document.querySelector('.logout-button')
const bookTripButton = document.querySelector('.book-trip-button')
const selectDate = document.getElementById('.select-date-calendar')
const numberOfTravelers = document.getElementById('.number-of-travelers')



// EVENT LISTENERS //
window.addEventListener('load', getAllData())


// HELPER FUNCTIONS //
function populateDashboard() {
    displayTravelerName()
    displayTotalAmountSpent()
    renderTrips()
}

// DOM MANIPULATION //
function displayTravelerName() {
    const travelerName = traveler.returnTravelerFirstName()
    userNameDisplay.innerText = `Welcome, ${travelerName}!`
}

function displayTotalAmountSpent() {
    const displayTotal = traveler.calculateSpentOnTripsForYear(destinationData)
    totalSpent.innerText = `Total Cost of Trips this Year: $${displayTotal.toFixed(2)}`
}

function renderTrips() {
    const trips = traveler.findMyTrips(tripData)
    console.log(trips)

    const findDestinations = traveler.findMyDestinations(tripData, destinationData)
    console.log(findDestinations)
    
//     const findDestination = findTrips.forEach(trip => {
//         destinationData.forEach(destination => {
//             if (trip.destinationID === destination.id)
//         })
//     })

//     // Array of trips
//     // Array of destinations
//     // How do we access BOTH for interpolation
//     // ForEach and a forEach
   
//     console.log('DESTINATIONS', findDestinations)

    // tripCardContainer.innerHTML = `<div class="trip-card">
    // <img class="destination-image" src="${findDestinations.image}" alt="${findDestinations.alt}">
    // <div class="trip-details"><h3 class='location-name">${findDestinations.destination}</h3>
    // <p>Trip Date: ${findTrips.date}</p><p>Status: ${findTrips.status}</p>
    // <p class="trip-duration">${findTrips.duration}</p>
    // <p class="trip-travelers">${findTrips.travelers}</p></div></div>`
}



console.log('This is the JavaScript entry file - your code begins here.');
