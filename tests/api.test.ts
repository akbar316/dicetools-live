import { db } from '../firebase';
import { collection, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';

const testApi = async () => {
  try {
    console.log('Starting API test...');

    const testCollection = collection(db, 'test-collection');
    const testDoc = doc(testCollection, 'test-doc');

    console.log('Writing test document...');
    await setDoc(testDoc, { message: 'Hello, world!' });

    console.log('Reading test document...');
    const docSnap = await getDoc(testDoc);

    if (docSnap.exists() && docSnap.data().message === 'Hello, world!') {
      console.log('API test successful!');
    } else {
      console.error('API test failed: Document not found or data mismatch.');
    }

    console.log('Cleaning up...');
    await deleteDoc(testDoc);
    console.log('Test finished.');

  } catch (error) {
    console.error('API test failed with an error:', error);
  }
};

testApi();
