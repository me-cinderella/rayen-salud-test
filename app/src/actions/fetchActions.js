
export const getTutorialsBegin = () => ({
    type: 'FETCH_BEGIN'
  });
  
export const getTutorialsFail = error => ({
    type: 'FETCH_FAIL',
    payload: error
  });
  
export const getTutorialsSuccess = data => ({
    type: 'FETCH_SUCCESS',
    payload: data
  });

const getTutorials = () => {
    return async dispatch => {

        dispatch(getTutorialsBegin());

        let Tutorials = await fetch('https://rayentutorialtestapp.azurewebsites.net/tutorials')
            .then(response => response.json())
            .catch(error => dispatch(getTutorialsFail(error)))

        dispatch(getTutorialsSuccess(Tutorials));
    }
}

export default getTutorials;