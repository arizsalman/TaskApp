
// import'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import Login from './component/Login'

// function App() {

//   return (
//     <>
//      <h1> My FireBase Authantication</h1>
//      <Login></Login>
//     </>
//   )
// }

// export default App





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './component/Home';
// import Login from './component/Login';
// import './App.css'


// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//     </Routes>
//   );
// };

// export default App;



import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

import Home from './component/Home';
import Login from './component/Login';
import './App.css';

const clientId = "1066484874652-k03cp5qsrbpqgjea5ikk1dncdl8uqat4.apps.googleusercontent.com";

const App = () => {
  const [user, setUser] = useState(null);
  const [calendarReady, setCalendarReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (!currentUser) return;
      console.log("👤 Firebase user detected:", currentUser.email);

      gapi.load("client", async () => {
        await gapi.client.init({
          apiKey: "", // Optional if not accessing public API
          clientId,
          scope: "https://www.googleapis.com/auth/calendar.events",
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        });

        const tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: "https://www.googleapis.com/auth/calendar.events",
          callback: (tokenResponse) => {
            if (tokenResponse.access_token) {
              gapi.client.setToken({ access_token: tokenResponse.access_token });
              console.log("✅ Google Calendar access token received");
              setCalendarReady(true);
            } else {
              console.error("❌ Token fetch failed");
            }
          },
        });

        tokenClient.requestAccessToken(); // Trigger login & consent
      });
    });

    return () => unsubscribe();
  }, []);

  const addEventToCalendar = async () => {
    if (!calendarReady) {
      alert("📛 Google Calendar API not ready yet. Try again in a moment.");
      return;
    }

    const event = {
      summary: "📌 Task Deadline",
      description: "Task created from Todo App",
      start: {
        dateTime: "2025-07-01T09:00:00",
        timeZone: "Asia/Karachi",
      },
      end: {
        dateTime: "2025-07-01T10:00:00",
        timeZone: "Asia/Karachi",
      },
    };

    try {
      const request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute((event) => {
        if (event.htmlLink) {
          alert("✅ Event added to Google Calendar!");
          console.log("📅 Event link:", event.htmlLink);
        } else {
          alert("❌ Failed to add event.");
          console.error(event);
        }
      });
    } catch (err) {
      alert("❌ Error adding event");
      console.error(err);
    }
  };

  return (
    <div className="container p-4">
      <h1>My Firebase Auth + Google Calendar App</h1>

      {user && (
        <button className="btn btn-success mb-3" onClick={addEventToCalendar}>
          ➕ Add Sample Event to Google Calendar
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;