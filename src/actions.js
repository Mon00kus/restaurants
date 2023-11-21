import { firebaseApp } from "./firebase";
import * as firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore(firebaseApp);

export const getCollection = async (collection) => {
  const result = { ststusResponse: false, data: null, error: null };
  try {
    const data = await db.collection(collection).get();
    //console.log(data);
    //const arrayData = data.docs.map(doc => console.log(doc.data()));
    //console.log(arrayData);
    const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    result.ststusResponse = true;
    result.data = arrayData;
  } catch (error) {
    result.error = error;
  }
  return result;
};