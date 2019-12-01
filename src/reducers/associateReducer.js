const initialState = {
    associates: [
        {
            'name':'Justin Dupre',
            'commission': 45.89,
            'id': 'uwolw25z8',
            'password': 'password'
        },
        {
            'name':'Justin Dupre',
            'commission': 105.65,
            'id': 'qnsa6xsjz',
            'password': 'password'
        },
        {
            'name':'Justin Dupre',
            'commission': 207.45,
            'id': 'g3ju94bjk',
            'password': 'password'
        },
        {
            'name':'Justin Dupre',
            'commission': 67.34,
            'id': 'hy535n748',
            'password': 'password'
        },
        {
            'name':'Justin Dupre',
            'commission': 543.23,
            'id': '4p5p8y9gi',
            'password': 'password'
        }
    ]
  };
  
  function associateReducer(state = initialState, action) {
  
    switch(action.type) {
      case 'ADD_QUOTE':
        // return {
        //      ...state, quotes: [ ...state.quotes, action.payload ] 
        // };
      case 'HOVER_OFF':
        // return {
        //  // hoveredOn: null
        // };
      default:
        return state;
    }
  }
  
  export default associateReducer;