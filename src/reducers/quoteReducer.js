const initialState = {
  quotes: [
    {
      'name': 'Bell South',
      'desc': 'Bell South quote',
      'price': 76.33,
      'email': 'bellsouth56@gmail.com',
      'complete': false,
      'id': 1
    }
  ]
};

function quoteReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_QUOTE':
      return {
        ...state, quotes: [...state.quotes, action.payload]
      };
    case 'EDIT_QUOTE':
      console.log(action.payload.id);
      
      let newState = {...state};
      newState.quotes.forEach((quote, i) => {
        if(quote.id === action.payload.id){
          newState.quotes[i] = action.payload
        }
      });

      console.log(newState.quotes);
      
      
      return {
        ...state,
        quotes: newState.quotes
      };
    default:
      return state;
  }
}

export default quoteReducer;