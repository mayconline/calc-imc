import { IMCProvider } from './src/context/IMCContext';
import { Routes } from './src/routes';

function App() {
  return (
    <IMCProvider>
      <Routes />
    </IMCProvider>
  );
}

export default App;
