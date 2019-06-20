// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = "FETCH";
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export function addSwapis(swapis) {
    return {
      type: SUCCESS,
      payload: swapis,
    };
  }

  export function failure(error) {
      return {
          type: FAILURE,
          payload: error
      }
  }

  export function fetch(works) {
    return {
        type: FETCH,
        payload: works
    }
}

  export const fetchSwapis = () => dispatch => {
    dispatch(fetch(true));
    //dispatch({type: FETCH})
    // we code
    axios.get('https://swapi.co/api/people/')
      .then(res => {
          console.log(res.data)
        dispatch(addSwapis(res.data.results)); // option 2
        //dispatch(fetch(false));
      })
      .catch(error => {
        //dispatch(fetch(false));
        dispatch(failure(error.message));
        console.log(error.message);
      });
  };