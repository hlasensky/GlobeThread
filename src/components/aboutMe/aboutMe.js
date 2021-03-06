import React from "react";

import "./aboutMe.css";

const aboutMe = () => {
	return (
		<div className="about-div">
			<section id="AboutMe">
				<div className="clp-div">
					<div className="img-div">
						<img className="me" src="./me.jpg" alt="Me" />
					</div>
				</div>
				<div className="container">
					<h2 className="about-h2">About me</h2>
					<p className="about-p">
						I'm a person who likes to do interesting things and
						learn something new, I'm also a self-taught programmer
						and web developer looking for experience and fun.
					</p>
					<div>
						<hr></hr>
						<h3 className="about-h3">Skills</h3>
						<div className="skill-container">
							<img
								title="Python"
								className="pr-lg"
								src="./python.png"
								alt="error"
							/>
							<img
								title="JavaScript"
								className="pr-lg"
								src="./javascript.png"
								alt="error"
							/>
							<img
								title="NodeJs"
								className="pr-lg"
								src="./node_js.svg"
								alt="error"
							/>
							<img
								title="React"
								className="pr-lg "
								src="./atom.svg"
								alt="error"
							/>
							<img
								title="HTML"
								className="pr-lg"
								src="./html.png"
								alt="error"
							/>
							<img
								title="CSS"
								className="pr-lg"
								src="./css.png"
								alt="error"
							/>
						</div>
					</div>
					<img className="me2" src="./me.jpg" alt="Me" />
				</div>
			</section>
		</div>
	);
};

export default aboutMe;
