import { initializeApp } from 'firebase/app';
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'; 


  const config = JSON.parse(process.env.FIREBASE_CONFIG);
  const firebaseApp =  initializeApp(config);

  export const auth = getAuth(firebaseApp);
  export const firestore = getFirestore(firebaseApp)



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; //if userAuth is null then exit

    // console.log(userAuth)

    const userRef = doc(firestore, "users", userAuth.uid);
    const snapShot = await getDoc(userRef);

    // console.log(userRef)

    if (!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      //console.log("Document data:", snapShot.data());
      try{
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(err){
        console.log("error creating user", err.message)
      }
    } 

    return userRef;
  }

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => signInWithPopup(auth, provider);

//   export default firebase;
