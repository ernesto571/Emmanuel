
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import LandingPage from "./LandingPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2500,
          style: { background: "#1a1a1a", color: "#f5ede4", borderRadius: "9999px", padding: "12px 20px", fontSize: "14px", fontWeight: 600, fontFamily: "inherit", boxShadow: "0 8px 24px rgba(0,0,0,.15)" },
          success: { iconTheme: { primary: "#F2B97A", secondary: "#1a1a1a" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#f5ede4" } },
        }}
      />
    </div>
  )
}

export default App
