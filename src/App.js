// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayFilms />
    </div>
  );
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

const GET_FILMS = gql`
  query {
    films {
      id
      title
      uri
      director
    }
  }
`;

function DisplayFilms() {
  const { loading, error, data } = useQuery(GET_FILMS);

  if (error) console.log(error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.films.map(({ id, title, director }) => (
    <div key={id}>
      <h3>{title}</h3>
      <b>Director: {director}</b>
      <br />
    </div>
  ));
}
