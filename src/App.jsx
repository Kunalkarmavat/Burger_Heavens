import React from "react";
import Home from "./pages/Home";  // Adjust path based on where you create Home.jsx

export const colors = {
  bgDark: "#1E1E1E",
  textLight: "#E9E3DC",
  accentPurple: "#B3A0CD",
  highlightYellow: "#D1EF53",
};

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
