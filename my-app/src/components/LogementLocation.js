import "../styles/components/LogementLocation.scss";

const LocationLogement = (props) => {
  const location = props.location;
    return (
      <h3 className="logement_location">{props.location}</h3>
    );
};

export default LocationLogement;
