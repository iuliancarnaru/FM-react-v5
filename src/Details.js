import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };

  // run only once
  componentDidMount() {
    // usefull for ajax request
    // props are read-only
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
      // eslint-disable-next-line no-console
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      // make it nice with spinner or skheleton
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;