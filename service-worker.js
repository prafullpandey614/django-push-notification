importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDTAb425y_oiYZCGT9Fi4ZnqsYaqG6qXB4",
    authDomain: "django-push-fd563.firebaseapp.com",
    projectId: "django-push-fd563",
    storageBucket: "django-push-fd563.appspot.com",
    messagingSenderId: "594596904143",
    appId: "1:594596904143:web:19ac45740087725b9a4bba"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();
messaging.getToken({vapidkey: "BH38baGznVo-o-U7glnaHOj-g2An-EHHRg0OiD66bDU9SWJglfOO7nw1H11VXlrDHlvkRmklXKkbM4gjCqn_FaI"
})
messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
