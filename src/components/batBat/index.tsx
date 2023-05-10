import React from "react";
import "./index.css";

function BatBat() {
	return (
		<div className="container">
			{/* Batman */}
			<div className="batman">
				{/* Face */}
				<div className="center-block" id="face">
					{/* Ear */}
					<div>
						<div className="ear1"></div>
						<div className="ear2"></div>
					</div>
					{/* Face shading */}
					<div className="face_shade"></div>
					{/* Face shine */}
					<div>
						<div className="circle1"></div>
						<div className="circle2"></div>
					</div>
					{/* Lower face */}
					<div>
						<div className="lower_face_shade"></div>
						<div className="lower_face"></div>
						<div className="mouth"></div>
						<div className="chin"></div>
					</div>
					{/* Eyes */}
					<div>
						<div className="eye1">
							<div className="eyebrow1"></div>
						</div>
						<div className="eye1 eye2">
							<div className="eyebrow2"></div>
						</div>
					</div>
				</div>
				{/* Lower body, hands, and cape */}
				<div className="center-block" id="cape">
					{/* Hands */}
					<div className="hands center-block">
						<div className="hand1"></div>
						<div className="hand1 hand2"></div>
					</div>
					{/* Torso */}
					<div className="center-block" id="torso">
						<div className="torso_shade"></div>
						{/* Belt */}
						<div className="dark1"></div>
						<div className="belt-position">
							<div className="belt">
								<div className="belt_"></div>
							</div>
							<div className="belt1">
								<div className="belt_1"></div>
							</div>
							<div className="belt2">
								<div className="belt_2"></div>
							</div>
							<div className="belt3"></div>
							<div className="belt4"></div>
						</div>
						{/* Bat sign */}
						<div className="bat-sign">
							<div className="bat"></div>
							<div className="lower_tail"></div>
							<div className="white_shine"></div>
							<div className="white_shine rotate"></div>
						</div>
					</div>
				</div>
			</div>
			{/* Batman's shadow */}
			<div className="scaling">
				<div className="center-block batman_shadow"></div>
			</div>
		</div>
	);
}

export default BatBat;
