let btn = document.querySelector("button");

const swRegistration = navigator.serviceWorker.register("sw.js"); //notice the file name

btn.addEventListener("click", function () {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
  // show notification api
  // https://developer.mozilla.org/en-US/docs/Web/API/Notification/show
  if (Notification.permission === "granted") {
    let notification = new Notification("Hello World");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        let notification = new Notification("Hello World");
      }
    });
  }
});
