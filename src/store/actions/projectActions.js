export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asyn call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authID = getState().firebase.auth.uid
    firestore.collection("projects").add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authID,
      createAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT", project });
    }).catch((err) => {
      dispatch({type: "CREATE_PROJECT_ERROR", err})
    });
  };
};
