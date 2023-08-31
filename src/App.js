import './App.css';
import MainSection from './main/MainSection';
import AppRoutes from './AppRoutes';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <>
      <AppProvider>
        <MainSection routes={<AppRoutes />} />
      </AppProvider>
    </>
  );
}

export default App;
