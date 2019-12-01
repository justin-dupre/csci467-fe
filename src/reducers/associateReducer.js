const initialState = {
    associates: [
        {
            'name':'Azra Roche',
            'commission': 45.89,
            'id': 'uwolw25z8',
            'password': 'password',
            'admin': false
        },
        {
            'name':'Fredrick Reader',
            'commission': 105.65,
            'id': 'qnsa6xsjz',
            'password': 'password',
            'admin': false
        },
        {
            'name':'Portia Smith',
            'commission': 207.45,
            'id': 'g3ju94bjk',
            'password': 'password',
            'admin': true
        },
        {
            'name':'Martyna Hutchings',
            'commission': 67.34,
            'id': 'hy535n748',
            'password': 'password',
            'admin': false
        },
        {
            'name':'Seth Hall',
            'commission': 543.23,
            'id': '4p5p8y9gi',
            'password': 'password',
            'admin': true
        }
    ]
  };
  
  function associateReducer(state = initialState, action) {
  
    switch(action.type) {
      case 'ADD_COMMISSON':
          let newState = {...state};
          newState.associates.forEach((associate, i) => {
            if(associate.id === action.payload.id){
              newState.associates[i].commission += action.payload.commission
            }
          });
          return {
            ...state,
            associates: newState.associates
          };
      case 'EDIT_ASSOCIATE':

          let newerState = {...state};
          newerState.associates.forEach((associate, i) => {
            if(associate.id === action.payload.id){
              newerState.associates[i] = action.payload
            }
          });
    
          console.log(newerState.associates);
        return {
         ...state,
         associates: newerState.associates
        };
      default:
        return state;
    }
  }
  
  export default associateReducer;