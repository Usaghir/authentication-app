// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: 'AIzaSyCvTPjUuOo3wKvqyoAv9p0pacJZ9BR1_FM',
    authDomain: 'socialmeida-eeaae.firebaseapp.com',
    databaseURL: 'https://socialmeida-eeaae-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'socialmeida-eeaae',
    storageBucket: 'socialmeida-eeaae.appspot.com',
    messagingSenderId: '803156472007',
    appId: '1:803156472007:web:18474423e9072246974ee2',
    measurementId: 'G-VN0PXBXRCK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
