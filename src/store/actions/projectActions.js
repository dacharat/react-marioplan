export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asyn call to database
    const firestore = getFirestore();
    firestore.collection("projects").add({
      ...project,
      authorFirstName: "Dacharat",
      authorLastName: "Pankong",
      authorId: 12345,
      createAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT", project });
    }).catch((err) => {
      dispatch({type: "CREATE_PROJECT_ERROR", err})
    });
  };
};
