import './App.css';
import MainSection from './main/MainSection';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <MainSection routes={<AppRoutes />} />
    </>
  );
}

export default App;
