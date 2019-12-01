const initialState = {
  quotes: [
    {
      'name': 'Bell South',
      'desc': 'Bell South quote',
      'price': 76.33,
      'email': 'bellsouth56@gmail.com',
      'complete': false,
      'id': 1,
      'notes': "Don't do too much business with them."
    },
    {
      'name': 'Microscale Inc.',
      'desc': 'Microscale Inc. quote',
      'price': 450.65,
      'email': 'microscale.contact@gmail.com',
      'complete': false,
      'id': 2,
      'notes': "Microscale are nice people."
    },
    {
      'name': 'Warburg Exchange',
      'desc': 'Warburg Exchange quote',
      'price': 256.70,
      'email': 'warburg.exchange@gmail.com',
      'complete': false,
      'id': 3,
      'notes': "contact name is Jeff"
    },
    {
      'name': 'FunGiftIdeas.com',
      'desc': 'FunGiftIdeas company',
      'price': 986.23,
      'email': 'contact@FunGiftIdeas.com',
      'complete': false,
      'id': 4,
      'notes': "They have fun gift ideas"
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