// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVSH3Z9KwYpGGVbSa4NUeSlPjypSv63CA",
  authDomain: "notify-3dd17.firebaseapp.com",
  projectId: "notify-3dd17",
  storageBucket: "notify-3dd17.appspot.com",
  messagingSenderId: "319404790305",
  appId: "1:319404790305:web:0e519ec19e5b2b24518960"
};

export const getFbToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BLBVTRcpLVzav5jT8OYot9nMf3rVThy4JFRrTRY9dkNj3P-gZYGfe3DveXGKEdR4rlOs7o52WwV2wnlwWuCbScM'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);