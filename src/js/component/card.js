import React from "react";
import Proptypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Prototypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="card">
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.labelButton}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: Proptypes.string,
	image: Proptypes.string,
	text: Proptypes.string,
	buttonUrl: Proptypes.string,
	labelButton: Proptypes.string
};
