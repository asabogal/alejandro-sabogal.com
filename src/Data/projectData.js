import dj_charts from './projectImages/dj-charts.jpg'
import recordbox_reviews from './projectImages/recordbox_reviews.jpg'
import uefa_schedules from './projectImages/uefa_schedules.jpg'
import interval_training_timer from './projectImages/interval_training_timer.jpg'

export const projectData = [
  
  {
    id: 1,
    name: "DJ Charts",
    description: "Users (a.k.a DJ's or record collectors) can share their top vinyl record charts.",
    tools: 'Sinatra, Ruby, HTML, CSS',
    repoLink: "https://github.com/asabogal/dj-charts-sinatra-app",
    image: dj_charts,
    url: 'https://www.youtube.com/watch?v=nwtz3w8ToMg'
  },
  {
    id: 3,
    name: "Record Box Reviews",
    description: "Record collection organizer and reviewer app, stores, shares and reviews user vinyl records.",
    tools: 'Ruby on Rails, Bootstrap',
    repoLink: "https://github.com/asabogal/recordbox-reviews",
    image: recordbox_reviews,
    url: 'https://recordbox-reviews.herokuapp.com/'
  },
  {
    id: 2,
    name: "UEFA Schedules",
    description: "Get previous, future, and up to the minute European soccer legue schedules.",
    tools: 'Javascript, JQuery, Ruby on Rails',
    repoLink: "https://github.com/asabogal/UEFA-schedules",
    image: uefa_schedules,
    url: 'https://uefa-schedules.herokuapp.com/'
  },
  {
    id: 4,
    name: "Interval Training Timer",
    description: "Customizable, High-Intensity-Interval-Training Timer.",
    tools: 'React, Redux, Javascript, Ruby on Rails, React-strap',
    repoLink: "https://github.com/asabogal/interval-training-timer",
    image: interval_training_timer,
    url: 'https://interval-training-timer.herokuapp.com/'
  }
]
