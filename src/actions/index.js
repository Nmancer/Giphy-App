const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`;
const API_URL = "https://api.giphy.com/v1/gifs/";
const fetchResults = term => async dispatch => {
  fetch(`${API_URL}search?q=${term}&limit=50&${API_KEY}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: "FETCH_RESULTS",
        payload: data
      })
    );
};
const fetchTrending = firstRender => async (dispatch, getState) => {
  const offset = firstRender ? 0 : getState().trending.data.length + 1;
  fetch(`${API_URL}trending?offset=${offset}&${API_KEY}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: "FETCH_TRENDING",
        payload: data,
        reset: firstRender
      })
    );
};
export { fetchTrending, fetchResults };
