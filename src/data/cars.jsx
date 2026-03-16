import falcon from '../assets/falcon.jpg'
import storm from '../assets/storm.jpg'
import horizon from '../assets/horizon.jpg'

const cars = [
  {
    id:"falcon",
    name:"Falcon EV",
    description:"Next generation performance electric car",
    speed:"250 km/h",
    range:"450 km",
    price:"$70,000",
    image:falcon
  },

  {
    id:"storm",
    name:"Storm EV",
    description:"Luxury electric sedan built for comfort",
    speed:"220 km/h",
    range:"420 km",
    price:"$65,000",
    image:storm
  },

  {
    id:"horizon",
    name:"Horizon EV",
    description:"Family electric SUV with long range",
    speed:"200 km/h",
    range:"480 km",
    price:"$60,000",
    image:horizon
  }
]

export default cars