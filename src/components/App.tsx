import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainScreen from '../pages/MainScreen';
import FormScreen from '../pages/FormScreen';
import { useAppSelector } from '../hooks/useAppSelector';

export default function App() {
  const stepNumber = useAppSelector((state) => state.stepNumber);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route
          path="form"
          element={stepNumber > 0 ? <FormScreen /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
