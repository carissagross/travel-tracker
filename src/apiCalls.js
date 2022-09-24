const getTravelersApi = fetch('http://localhost:3001/api/v1/travelers')
.then(response => response.json())
.then(data => (data))
.catch(err => console.log(err))

const getDestinationsApi = fetch('http://localhost:3001/api/v1/destinations')
.then(response => response.json())
.then(data => (data))
.catch(err => console.log(err))

const getTripsApi = fetch('http://localhost:3001/api/v1/trips')
.then(response => response.json())
.then(data => (data))
.catch(err => console.log(err))

export { getTravelersApi, getDestinationsApi, getTripsApi }
