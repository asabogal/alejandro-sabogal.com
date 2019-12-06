import dj_charts from './projectImages/dj-charts.png'
import recordbox_reviews from './projectImages/recordbox_reviews.png'
import uefa_schedules from './projectImages/uefa_schedules.png'
import interval_training_timer from './projectImages/interval_training_timer.png'
import cryptofolio from './projectImages/cryptofolio_inprogress.png'

export const projectData = [
  
  {
    id: 1,
    name: "DJ Charts",
    description: "Users (a.k.a DJ's or record collectors) can share their top vinyl record charts.",
    tools: 'Sinatra, Ruby, HTML, CSS',
    repoLink: "https://github.com/asabogal/dj-charts-sinatra-app",
    image: dj_charts,
    url: 'https://www.youtube.com/watch?v=nwtz3w8ToMg',
    video: 'https://www.youtube.com/watch?v=nwtz3w8ToMg'
  },
  {
    id: 3,
    name: "Record Box Reviews",
    description: "Record collection organizer and reviewer app, stores, shares and reviews user vinyl records.",
    tools: 'Ruby on Rails, Bootstrap, HTML, CSS, Google Cloud Platform',
    repoLink: "https://github.com/asabogal/recordbox-reviews",
    image: recordbox_reviews,
    url: 'https://recordbox-reviews.herokuapp.com/',
    video: 'https://youtu.be/CHqRyEE8Jeg'
  },
  {
    id: 2,
    name: "UEFA Schedules",
    description: "Get previous, future, and up to the minute European soccer legue schedules.",
    tools: 'Javascript, JQuery, Ruby on Rails, External & Rails API',
    repoLink: "https://github.com/asabogal/UEFA-schedules",
    image: uefa_schedules,
    url: 'https://uefa-schedules.herokuapp.com/',
    video: 'https://youtu.be/73hkA9pLtJg'
  },
  {
    id: 4,
    name: "Interval Training Timer",
    description: "Customizable, High-Intensity-Interval-Training Timer.",
    tools: 'React, Redux, Javascript, Ruby on Rails, React-strap',
    repoLink: "https://github.com/asabogal/interval-training-timer",
    image: interval_training_timer,
    url: 'https://interval-training-timer.herokuapp.com/',
    video: 'https://youtu.be/vNy4p2KSsEI'
  },
  {
    id: 5,
    name: "Cryptofolio",
    description: "[IN PROGRESS] Cryptocurrency Portfolio. Fetches live and historical crypto data.",
    tools: 'React, Javascript, Styled Components, Ruby on Rails, RESTful API',
    repoLink: "https://github.com/asabogal/cryptofolio-client",
    image: cryptofolio,
    url: '#/in_progress',
    // video: 'https://youtu.be/vNy4p2KSsEI'
  }
]
