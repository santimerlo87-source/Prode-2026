importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC4w9OeswyNimznnNL6sAUXAtrb80Kft9E",
    authDomain: "predicciones-2026.firebaseapp.com",
    projectId: "predicciones-2026",
    storageBucket: "predicciones-2026.firebasestorage.app",
    messagingSenderId: "226705370126",
    appId: "1:226705370126:web:04dfa828c687c9ee5ee05f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Notificación recibida en segundo plano:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icono.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});