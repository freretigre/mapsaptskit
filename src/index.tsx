import { StrictMode } from 'react'
import { hydrate } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
if(container?.hasChildNodes()){
  hydrate(
    <StrictMode>
        <App />
    </StrictMode>, 
    container
  );
}else{
  root.render(
    <StrictMode>
        <App />
    </StrictMode>,
  );
}

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
