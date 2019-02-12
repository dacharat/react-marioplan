const initState = {
  projects: [
    { id: "1", title: "A", content: "AAA" },
    { id: "2", title: "B", content: "bbb" },
    { id: "3", title: "C", content: "ccc" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      
      break;
  
    default:
      break;
  }
  return state;
};

export default projectReducer;
