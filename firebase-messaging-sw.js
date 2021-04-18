importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyBrpNH_htpBgqxWwjXrGpNl7ptzbJ6E1J8",
  authDomain: "notification-push-ab317.firebaseapp.com",
  projectId: "notification-push-ab317",
  storageBucket: "notification-push-ab317.appspot.com",
  messagingSenderId: "156445976729",
  appId: "1:156445976729:web:0b8117c3f57bd408177008",
  measurementId: "G-EDDP9JRW4F",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("payload2:", payload);
  const notification = JSON.parse(payload);
  const notificationOption = {
    body: notification.body,
    icon: notification.icon,
  };

  return self.registration.showNotification(payload.notification.title, notificationOption);
});
