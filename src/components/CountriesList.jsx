import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import PropTypes from "prop-types";

function CountriesList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map " />
    );
  return (
    <ul>
      {cities.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
CountriesList.PropTypes({
  isLoading: PropTypes.bool.isRequired,
  cities: PropTypes.string.isRequired,
});

export default CountriesList;
