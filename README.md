# Journey (Travel Tracker)

## Introduction
- Travel Tracker is the final solo project for Mod 2 of Turing School of Software & Design. This project focused on using Test Driven Development and Object Oriented Programming to build an interactive travel site where users can log in to view their trips and book a new trip. The Fetch API was used to retrieve and post data. Specifications for this project can be found link [here](https://frontend.turing.edu/projects/travel-tracker.html).

## Technologies
- ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)
- ![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)
- ![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
- ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)

## Illustrations
**Login Page**
<img width="1606" alt="Screen Shot 2022-09-26 at 8 41 56 AM" src="https://user-images.githubusercontent.com/83977544/192309170-7ca101ef-b3c8-4cca-ad15-077dea0b793e.png">

**Traveler Dashboard**
<img width="1356" alt="Screen Shot 2022-09-26 at 5 34 49 PM" src="https://user-images.githubusercontent.com/83977544/192398918-0e3789e2-427d-49b3-88d1-d66609b7d0ee.png">

![Application Preview_1](https://user-images.githubusercontent.com/83977544/192398948-49f4c210-b1c5-44f5-b5b0-484fecb8647e.gif)

## Features
**Login:** On load, the user sees a login form.  To log in, enter ```traveler``` followed by a number between 1 and 50. The password for all users is ```travel```.

**Traveler Dashboard:** Once the user is logged in, they can see all of their trips displayed and sorted by date.  The dashboard header also includes the amount they have spent on trips this year.

**Book a Trip:** A booking form is displayed on the dashboard so the user can fill out the form to request a new trip.  They are able to view an estimated cost before booking.  Upon submission, the new trip populates with a status of "Pending".

**Accessibility:** This application was tested with Lighthouse and the WAVE Chrome extension.

## Possible Future Extentions
- Add local storage to saved trips.
- Allow users to filter their trips
- Add a traveler profile so user can view their account details

## Challenges
- Navigating the complexity and vastness of this project was a challenge.  Organization and solving small problems at a time were extremely important.

## Sources
- All images used on the login and traveler dashboard were photos that I have taken on Colorado adventures
- [Carissa Gross Photography](https://www.carissagrossphotography.com/)
- MDN

## Contributors
- [Carissa Gross](https://github.com/carissagross)

## Set-Up
1. Fork and clone this repo.
2. Read the README thoroughly
3. Type cd travel-tracker to move into the root directory
4. Run ```npm install``` to install necessary dependencies
5. Run ```npm start```
6. Copy the URL given by running ```npm start``` in your browser.




_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.
