import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import Comp1 from './components/Comp1';

function App() {
  return (
    <StrictMode>
        <Comp1/>
    </StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
