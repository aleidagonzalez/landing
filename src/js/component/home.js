import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container-fluid py-3">
				<div className="row">
					<div className="col-11 mx-auto">
						<Jumbotron />
						<div className="card-deck">
							<Card
								title="cardTitle"
								image={rigoImage}
								text={
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								}
								buttonUrl="#"
								labelButton="VOY"
							/>
							<Card
								title="cardTitle"
								image={rigoImage}
								text={
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								}
								buttonUrl="#"
								labelButton="VOY"
							/>
							<Card
								title="cardTitle"
								image={rigoImage}
								text={
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								}
								buttonUrl="#"
								labelButton="VOY"
							/>
							<Card
								title="cardTitle"
								image={rigoImage}
								text={
									"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
								}
								buttonUrl="#"
								labelButton="VOY"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
