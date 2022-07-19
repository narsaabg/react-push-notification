// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDVSH3Z9KwYpGGVbSa4NUeSlPjypSv63CA",
  authDomain: "notify-3dd17.firebaseapp.com",
  projectId: "notify-3dd17",
  storageBucket: "notify-3dd17.appspot.com",
  messagingSenderId: "319404790305",
  appId: "1:319404790305:web:0e519ec19e5b2b24518960"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});