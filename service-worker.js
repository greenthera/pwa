self.addEventListener("install", () => {});

self.addEventListener("activate", () => {});

self.addEventListener("fetch", () => {});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-notifications") {
    event.waitUntil(fetchNotifications());
  }
});

self.addEventListener("notificationclick", (event) => {
  event.waitUntil(handleNotificationClick(event));
});

function handleNotificationClick(event) {
  if (event.action === "close") {
    event.notification.close();
  }
}

async function fetchNotifications() {
  /**
   * Syncing Notification
   */
  showNotification({ count: 8 });
}

async function showNotification({ count }) {
  try {
    self.registration.showNotification("Prefalib notifications", {
      body: `Vous avez ${count} nouvelles nofitications Perfalib`,
      icon: "https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png",
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: "vibration-sample",
      requireInteraction: true,
      actions: [
        {
          action: "close",
          title: "Close",
        },
      ],
    });
  } catch (err) {
    console.log("Error showing notification");
  }
}
