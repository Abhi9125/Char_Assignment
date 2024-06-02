import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => (
  <div className="bg-gray-900 min-h-screen text-white p-5">
    <h1 className="text-3xl font-bold text-center mb-8">
      Network Alerts Dashboard
    </h1>
    <Dashboard />
  </div>
);

export default App;
