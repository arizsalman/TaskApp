// GoogleAuth.jsx
import React, { useEffect } from "react";

import { gapi } from "gapi-script";

const clientId = "1066484874652-k03cp5qsrbpqgjea5ikk1dncdl8uqat4.apps.googleusercontent.com"; // Replace with your actual client ID
// 
function GoogleAuth() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/calendar.events",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const signInWithGoogle = async () => {
    const auth2 = gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();
    const token = googleUser.getAuthResponse().access_token;

    console.log("✅ Access Token:", token);
    return token;
  };

  const addEventToCalendar = async () => {
    const event = {
      summary: "📌 Task Deadline",
      description: "Todo task auto-added from React App",
      start: {
        dateTime: "2025-07-01T09:00:00-07:00",
        timeZone: "Asia/Karachi",
      },
      end: {
        dateTime: "2025-07-01T10:00:00-07:00",
        timeZone: "Asia/Karachi",
      },
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    request.execute((event) => {
      console.log("📅 Event created: ", event.htmlLink);
      alert("Event added to your Google Calendar!");
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={signInWithGoogle}>🔐 Sign in with Google</button>
      <button onClick={addEventToCalendar} style={{ marginLeft: "1rem" }}>
        📅 Add to Calendar
      </button>
    </div>
  );
}

export default GoogleAuth;
