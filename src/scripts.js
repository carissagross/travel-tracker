// IMPORTS //
import './css/styles.css';
// import './images/DSC04153.png'

import Traveler from './Traveler'
import Destination from './Destination'
import Trip from './Trip'
import TripsRepo from './TripsRepo';

import { getTravelersApi, getDestinationsApi, getTripsApi } from './apiCalls'


// GLOBAL VARIALBES //
let travelerData;
let destinationData;
let tripData;
let traveler;
let destinations;
let allTrips;
let trips;

// PROMISE //
const getAllData = () => {
    Promise.all([getTravelersApi, getDestinationsApi, getTripsApi]).then((data) => {
        travelerData = data[0].travelers
        destinationData = data[1].destinations
        tripData = data[2].trips
        allTrips = new TripsRepo(tripData, destinationData)
        traveler = new Traveler(travelerData[Math.floor(Math.random() * travelerData.length)], allTrips)
        populateDashboard()
        //pass in id for single customer from login
    })
}
// POST API DATA //

// QUERY SELECTORS //
const loginPage = document.querySelector('.login-page')
const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const signInButton = document.querySelector('.sign-in-button')
const logoutButton = document.querySelector('.logout-button')
const userNameDisplay = document.querySelector('.welcome')
const totalSpent = document.querySelector('.total-spent')
const tripCardContainer = document.querySelector('.trip-card-container')
const departureDate = document.getElementById('select-date-calendar')
const numberOfTravelers = document.getElementById('number-of-travelers')
const numberOfDays = document.getElementById('number-of-days')
const destinationOptions = document.querySelector('.dropdown-destination-input')
const viewEstimateButton = document.querySelector('.view-estimate-button')
const bookTripButton = document.querySelector('.book-trip-button')
const tripEstimate = document.querySelector('.trip-estimate')
const tripEstimateContainer = document.querySelector('.trip-estimate-container')

// EVENT LISTENERS //
window.addEventListener('load', getAllData())
viewEstimateButton.addEventListener('click', function() {
    viewEstimate()
})




// HELPER FUNCTIONS //
const populateDashboard = () => {
    displayTravelerName()
    displayTotalAmountSpent()
    renderTrips()
    displayDestinationOptions()
}

// DOM MANIPULATION //
const viewEstimate = () => {
   const destinationName = destinationOptions.value
   const travelerNumber = Number(numberOfTravelers.value)
   const numberDays = Number(numberOfDays.value)
   const chooseDate = departureDate.value
   const tripCost = traveler.calculateTripCost(destinationName, travelerNumber, numberDays)

   tripEstimateContainer.classList.remove('hidden')
   tripEstimate.innerText = `Trip Estimate: $${tripCost.toFixed(2)}`
}

const displayTravelerName = () => {
    const travelerName = traveler.returnTravelerFirstName()
    userNameDisplay.innerText = `Welcome, ${travelerName}!`
}

const displayTotalAmountSpent= () => {
    const displayTotal = traveler.calculateSpentOnTripsForYear(destinationData)
    totalSpent.innerText = `Total Cost of Trips this Year: $${displayTotal.toFixed(2)}`
}

const displayDestinationOptions = () => {
    const destinations = destinationData.forEach(destination => {
        destinationOptions.innerHTML += `
        <option>${destination.destination}</option>`
    })
}

const renderTrips = () => {
    tripCardContainer.innerHTML = ''
    const tripRender = traveler.myTrips.forEach(trip => {
            tripCardContainer.innerHTML +=
            `<div class="trip-card">
              <img class="destination-image" src="${trip.image}" alt="${trip.alt}">
              <div class="trip-details">
                <p class="location-name"> ${trip.destination}</p>
                <p class="trip-date">Trip Date: ${trip.date}</p>
                <p class="status">Status: ${trip.initialStatus}</p>
                <p class="trip-duration">Trip Duration: ${trip.duration}</p>
                <p class="trip-travelers">Travelers: ${trip.travelers}</p>
            </div>`

    })
}

// OTHER FUNCTIONS //
// const clearBookingForm = () => {
//     numberOfDays.value = ''
//     numberOfTravelers.value = ''
//     departureDate.value = ''
//     destinationOptions.value = ''
// }



// function hide(element) {
//     element.classList.add('hidden');
//   };
  
//   function unhide(element) {
//     element.classList.remove('hidden');
//   };
