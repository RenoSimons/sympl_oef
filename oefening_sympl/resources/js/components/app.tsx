import React, { useState } from "react";

import Header from "./header";
import InputForm from "./inputForm";
import MemberList from "./memberList";

const App = () => {
    return (
        <div className="max-w-lg mx-auto">
            <div>
                <Header />
                <InputForm />
            </div>
            <div className="mt-10">
                <MemberList />
            </div>
        </div>
        
    );
};

export default App;