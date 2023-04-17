import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';

// function Root() {
//   return (
//     <React.StrictMode>
//       <RecoilRoot>
//         <App />
//       </RecoilRoot>
//     </React.StrictMode>
//   );
// }
//
function Root() {
  return (
    // <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
    // </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Root />
);
