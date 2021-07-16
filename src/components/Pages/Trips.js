import { Link, Switch, Route } from "react-router-dom";
import turkeyTrip from '../../images/Trips/CarTripToTurkey/carTripToTurkey.png'
import '../Scss/ImagesContainer.scss'

import CarTripToTurkey from "./TripsPages/CarTripToTurkey";


const tripList = [
    {
        id: 1,
        name: 'Car trip to Turkey',
        path: 'turkeyTrip',
        url: turkeyTrip,
    },
]

const TripsHeader = function () {
    return (
    <>
        <header className="alb">
            <div className="headerBorder"></div>
        </header>
        <h1>Trips</h1>
        <div className="images-container">
            {trips}
        </div>
    </>
    )
}

const trips = tripList.map(trip => (
    <div key={trip.id} className="single-element trip-element">
         <Link to={`/trips/${trip.path}`} >
            <img className="trip-image" src={trip.url} alt={trip.name} />
            <div className="element-title">
                 <p>{trip.name}</p> 
            </div>
         </Link>
    </div>
));

const Trips = () => {
    return ( 
        <>
        <div className="page">
            <Switch>
                <Route path="/trips" exact>
                    <TripsHeader />
                </Route>
                <Route path="/trips/turkeyTrip">
                    <CarTripToTurkey />
                </Route>
            </Switch>
        </div>
        </>
     );
}
 
export default Trips;