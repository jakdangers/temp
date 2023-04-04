import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import {RecoilRoot} from "recoil";

function Root() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <App/>
      </RecoilRoot>
    </React.StrictMode>
  );
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root/>);
