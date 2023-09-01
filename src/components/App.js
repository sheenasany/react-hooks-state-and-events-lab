import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function handleToggle () {
    setDarkMode(!darkMode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // can be done outside the JSX or inside
  // const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={darkMode ? 'App dark' : 'App Light'}>
      <header>
        <h2>Shopster</h2>
        {/* handles the text toggling back and forth */}
        <button onClick={handleToggle}>{darkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
