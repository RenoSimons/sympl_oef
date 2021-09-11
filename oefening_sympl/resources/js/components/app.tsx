import React, { useState } from "react";

import Header from "./header";
import InputForm from "./inputForm";
import UserList from "./userList";

// Todo:
// Autocomplete
// Dynamic project tags
// Form validation
// Error handling

const App = () => {

    let [rerenderComponent, setRerenderComponent] = useState(false);

    const rerenderParentCallback = () => {
        setRerenderComponent(rerenderComponent => !rerenderComponent);
    }
    
    return (
        <div className="max-w-lg mx-auto">
            <div>
                <Header />
                <InputForm rerenderParentCallback={rerenderParentCallback}/>
            </div>
            <div className="mt-10">
                <UserList rerenderComponent={rerenderComponent}/>
            </div>
        </div>
        
    );
};

export default App;