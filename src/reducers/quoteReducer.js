const initialState = {
    quotes: [
        {
            'name':'TEST',
            'desc': 'Dude',
            'price': 76.33,
            'email': 'tesetm email'
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