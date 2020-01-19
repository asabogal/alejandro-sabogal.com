import cryptoHome from '../Images/project_images/cryptofolio/home.png';
import intervalHome from '../Images/project_images/interval/ho';
import recorboxHome from '../Images/project_images/recordbox/home.png';
import uefaHome from '../Images/project_images/uefa/home.png';
import djchartsHome from '../Images/project_images/djcharts/home';

export const projectData = [
  {
    id: 1,
    year: 2018,
    name: 'DJ Charts',
    heading: 'Your favorite music records shared with the DJ Charts App',
    description: 'Designed for DJs, this is CRUD (Create, Read, Update and Delete) web app helps authenticated users display and share their top 10 monthly charts. Visitors do not need to be logged in to view the chart and record database, however, a user must be logged in and authenticated in order to edit and/or delete his/her chart/records.',
    stack: ['Sinatra', 'Ruby', 'HTML', 'CSS'],
    tools: ['Sqlite3', 'ActiveRecord', 'Bcrypt'],
    repoLink: 'https://github.com/asabogal/dj-charts-sinatra-app',
    url: 'https://www.youtube.com/watch?v=nwtz3w8ToMg',
    path:'djcharts',
    images: {
      home: djchartsHome
    }
  },
  {
    id: 2,
    year: 2018,
    name: 'UEFA-SCHEDULES',
    heading: 'Follow your team and never miss a match with UEFA Schedules',
    description: 'Designed with speed and practicality in mind, this API fetches previous, future, and up-to-the-minute European soccer league data from external sources, and serialized through Rails service objects. Data is rendered to users via JavaScript/AJAX.',
    stack: ['JavaScript', 'Ruby on Rails API'],
    tools: ['JQuery', 'Bootstrap','Postman', 'Postgres', 'Faraday', 'Heroku'],
    repoLink: "https://github.com/asabogal/UEFA-schedules",
    url: 'https://uefa-schedules.herokuapp.com/',
    path: 'uefa-schedules',
    images: {
      home: uefaHome
    }

  },
  {
    id: 3,
    year: 2018,
    name: 'Recordbox Reviews',
    heading: 'Music is to be shared! Organize it, share it, and discuss it with Recordbox Reviews',
    description: 'Rails Full Stack application, uses MVC design patterns and RESTful architecture to help authenticated users keep track of their vinyl record collection.',
    stack: ['Ruby on Rails'],
    tools: ['Bootstrap', 'CCS Grid', 'Bcrypt', 'Facebook SDK', 'Google Cloud', 'Postgres', 'Heroku'],
    repoLink: "https://github.com/asabogal/recordbox-reviews",
    url: 'https://recordbox-reviews.herokuapp.com/',
    path: 'recordbox-reviews',
    images: {
      home: recorboxHome
    }
  },
  {
    id: 4,
    year: 2019,
    name: 'Interval Training Timer',
    heading: 'Keep active and stay fit with the Interval Training Timer app',
    description: 'Companion training timer with customizable workout database presets. User interaction with Redux state management. Fully responsive and mobile ready for on-the-go high intensity workouts.',
    stack: ['React', 'Ruby on Rails API'],
    tools: ['Redux', 'Redux Thunk', 'Reactstrap', 'Postgres', 'Heroku'],
    repoLink: "https://github.com/asabogal/interval-training-timer",
    url: 'https://interval-training-timer.herokuapp.com/',
    path: 'interval-training-timer',
    images: {
      home: intervalHome
    }
  },
  {
    id: 5,
    year: 2019,
    name: 'Cryptofolio',
    heading: 'Track your favorite crypto-coins with the Cryptofolio Web App',
    description: 'User authenticated, cryptocurrency portfolio manager. Fetches real-time and historical data using async/await and back-end serializers. User friendly experience with Styled Components. State management through React Context API.',
    stack: ['React', 'JavaScript', 'Ruby on Rails API'],
    tools: ['React Context', 'Styled Components', 'React High Charts', 'Postgres', 'Bcrypt', 'CryptoCompare API', 'Heroku'],
    repoLink: 'https://github.com/asabogal/cryptofolio-production',
    url: 'https://cryptofolio-web-app.herokuapp.com/',
    path: 'cryptofolio',
    images: {
      home: cryptoHome
    }
  }
]
