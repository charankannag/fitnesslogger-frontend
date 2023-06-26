import React from "react";

export default function Previouspage() {
    const handleClick = (e) => {
      e.preventDefault();
      console.log('The link was clicked');
    }
  
    return (
        <form action="http://localhost:3000/">
        <button class = "previouspage" type="submit">
            previouspage
        </button>
    </form>
    );
  }