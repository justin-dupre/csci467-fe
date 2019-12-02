import axios from 'axios';


const setQuotes = response => ({
    type: 'SET_QUOTES',
    payload: response
});

export function getPageLoad() {
	return function (dispatch) {
		axios({
			method: 'get',
			url: 'http://localhost:8080/url'
		})
			.then((response) => {
                console.log(response);
                
				dispatch(setQuotes(response))
			})
			.catch((error) => {
				//dispatch(errorHandlingRecentTransactionsDetailsList(error));
			});
	};
}

