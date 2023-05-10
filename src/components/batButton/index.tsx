import "./index.css";

const BatButton = ({ onClick }) => {
	return (
		<button className="button-bat-bat" onClick={onClick}>
			<span>Destinations</span>
		</button>
	);
};

export default BatButton;
