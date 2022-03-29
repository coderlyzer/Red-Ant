import React, { useState } from "react";
import { useGlobalContext } from "./context";

const App = () => {
  const { movies, loading } = useGlobalContext();
  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
};

export default App;
