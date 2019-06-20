import React from "react";
import { connect } from "react-redux";
import Loaders from "./Loader";

import { CharacterList } from "../components";
// import actions
import { fetchSwapis } from "../actions/index"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchSwapis()
  }

  render() {
    console.log(this.props)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <Loaders />
    }
    return this.props.error ? (<p>{this.props.error}</p>) :
     (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

function mapStateToProps(state) {
  // STEP 9: FLESH OUT
  return {
    characters: state.charsReducer.characters,
    fetching:state.charsReducer.fetching,
    error:state.charsReducer.error
  };
}

export default connect(
/* mapStateToProps replaces null here */
  mapStateToProps,
  {
   fetchSwapis
  }
)(CharacterListView);
