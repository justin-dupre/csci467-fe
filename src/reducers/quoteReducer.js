const initialState = {
    quotes: [
        {
            'name':'Bell South',
            'desc': 'Bell South quote',
            'price': 76.33,
            'email': 'bellsouth56@gmail.com',
            'complete': false
        }
    ]
  };
  
  function quoteReducer(state = initialState, action) {
  
    switch(action.type) {
      case 'ADD_QUOTE':
        return {
             ...state, quotes: [ ...state.quotes, action.payload ] 
        };
      case 'HOVER_OFF':
        return {
         // hoveredOn: null
        };
      default:
        return state;
    }
  }
  
  export default quoteReducer;