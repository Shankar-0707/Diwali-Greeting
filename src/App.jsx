import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import GreetingPage from './components/GreetingPage';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/greeting/:id" element={<GreetingPage />} />
    </Routes>
  </Router>
);

export default App;
