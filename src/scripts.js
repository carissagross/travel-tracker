// IMPORTS //
import './css/styles.css';

import Traveler from './Traveler'
import Destination from './Destination'
import Trip from './Trip'
import TripsRepo from './TripsRepo';

import { sendAllData, postTripApi } from './apiCalls'

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
    sendAllData(10)
    .then((data) => {
        console.log(data)
        travelerData = data[0].travelers
        destinationData = data[1].destinations
        tripData = data[2].trips
        allTrips = new TripsRepo(tripData, destinationData)
        traveler = new Traveler(data[3], allTrips)
        populateDashboard()
    })
}

// QUERY SELECTORS //
const dashboardPage = document.querySelector('.travel-dashboard-page')
const loginPage = document.querySelector('.login-page')
const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const signInButton = document.querySelector('.sign-in-button')
const logoutButton = document.querySelector('.logout-button')
const userNameDisplay = document.querySelector('.welcome')
const totalSpent = document.querySelector('.total-spent')
const tripCardContainer = document.querySelector('.trip-card-container')
const departureDate = document.getElementById('calendar')
const numberOfTravelers = document.getElementById('number-of-travelers')
const numberOfDays = document.getElementById('number-of-days')
const destinationOptions = document.querySelector('.dropdown-destination-input')
const viewEstimateButton = document.querySelector('.view-estimate-button')
const bookTripButton = document.querySelector('.book-trip-button')
const tripEstimate = document.querySelector('.trip-estimate')
const tripEstimateContainer = document.querySelector('.trip-estimate-container')
const inputErrorMessage = document.querySelector('.input-error-container')

// EVENT LISTENERS //
window.addEventListener('load', getAllData())
viewEstimateButton.addEventListener('click', function() {
    viewEstimate()
})
bookTripButton.addEventListener('click', function() {
    bookTrip()
})

// HANDLER FUNCTIONS //
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
   
   if (!destinationName || !travelerNumber || !numberDays || !chooseDate) {
       inputErrorMessage.classList.remove('hidden')
    } else {
        inputErrorMessage.classList.add('hidden')
        tripEstimateContainer.classList.remove('hidden')
        tripEstimate.innerText = `Trip Estimate: $${tripCost.toFixed(2)}`   
   }
}

const bookTrip = () => {
    const destinationName = destinationOptions.value
    const travelerNumber = Number(numberOfTravelers.value)
    const numberDays = Number(numberOfDays.value)
    const chooseDate1 = departureDate.value.replace('-', '/')
    const chooseDate = chooseDate1.replace('-', '/')

    let destinationIdentifier;
    const destinationInfo = destinationData.filter(destination => {
        if (destination.destination === destinationName) {
            destinationIdentifier = destination.id
        }
    })
   
    const postObj = {
        id: Date.now(), userID: Number(traveler.id), destinationID: Number(destinationIdentifier), travelers: Number(travelerNumber), date: chooseDate, duration: numberDays, status: 'Pending', suggestedActivities: []}

    if (!destinationName || !travelerNumber || !numberDays || !chooseDate) {
        inputErrorMessage.classList.remove('hidden')
     } else {
         postTripApi(postObj)
         .then(response => { 
             if (!response.ok) {
                 throw new Error('Please complete the form')
             } else {
                 return response.json()
             }
         })
         .then(data => getAllData())
         .catch(err => console.log(err))
         clearBookingInput()
         inputErrorMessage.classList.add('hidden')
    }
}

const clearBookingInput = () => {
    destinationOptions.value = ''
    numberOfTravelers.value = ''
    numberOfDays.value = ''
    departureDate.value = ''
    tripEstimateContainer.classList.add('hidden')
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
                <p class="status">Status: ${trip.status}</p>
                <p class="trip-duration">Trip Duration: ${trip.duration}</p>
                <p class="trip-travelers">Travelers: ${trip.travelers}</p>
            </div>`

    })
}