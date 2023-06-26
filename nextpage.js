import React from "react";

export default function Nextpage() {
   const handleClick = (e) => {
      alert("our details are on the way")
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
        <div>    
        <form action="http://localhost:3000/?">
        <a href="http://localhost:3000/?"></a>
        <button class = "newpage" type="submit" onClick={handleClick} className="nextpage">
            nextpage
        </button>
    </form>
    </div>
    );
  }