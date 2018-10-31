import React from "react";
import { render } from "react-dom";
import { Data, locations } from "./locations";

 // Parent Component 
 
 const EachLocation = (props) => {
    return (
      <div className="flex-main-wrapper">
      {props.locations.map( location => 
          <Data 
            city={location.city}
            image={location.image}
            desc={location.desc}
            moreInfo={location.moreInfo}
            key={location.id}
          />      
        )}
      
      </div>
    );
  }

  // 3: Render the container component to the DOM
  render( <EachLocation locations={locations} />, document.getElementById('root'));