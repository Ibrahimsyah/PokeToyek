import React from "react";
import "./index.scss";
export default function Card(props) {
    const { title, description, image } = props;

    return (
        <div className="card-wrapper">
            <div className="image-wrapper">
                <img src={image} alt="" className="main-image" />
            </div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="description">{description} </p>
            </div>
        </div>
    );
}
