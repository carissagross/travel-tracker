const getTravelersApi = () => {
return fetch('http://localhost:3001/api/v1/travelers')
.then(response => response.json())
.catch(err => window.alert('Oops! We had a problem pulling your data.  Please refresh and try again!'))
}

const getCurrentTravelerApi = (id) => {
return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
.then(response => response.json())
.catch(err => window.alert('Oops! We had a problem pulling your data.  Please refresh and try again!'))
}

const getDestinationsApi = () => {
return fetch('http://localhost:3001/api/v1/destinations')
.then(response => response.json())
.catch(err => window.alert('Oops! We had a problem pulling your data.  Please refresh and try again!'))
}

const getTripsApi = () => {
return fetch('http://localhost:3001/api/v1/trips')
.then(response => response.json())
.catch(err => window.alert('Oops! We had a problem pulling your data.  Please refresh and try again!'))
}

const postTripApi = (postObj) => {
return fetch('http://localhost:3001/api/v1/trips', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postObj)
    })
}

const sendAllData = (id) => {
    return Promise.all([getTravelersApi(), getDestinationsApi(), getTripsApi(), getCurrentTravelerApi(id)])
}

export { getTravelersApi, sendAllData, postTripApi }
