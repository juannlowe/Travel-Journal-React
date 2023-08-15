import React from "react"
export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl} />
            <div className="card--title">
                <p>📍{props.location} <a className="card--location" href="{props.googleMapsUrl}">View on Google Maps</a></p>
                <h2>{props.title}</h2>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--info">{props.description}</p>    
            </div>
        </div>
    )
}