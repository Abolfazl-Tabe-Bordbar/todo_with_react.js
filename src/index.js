import ReactDOM from 'react-dom/client';
import TitleHeader from "./Components/Header/TitleHeader";
import Todos from "./Components/Todos/Todos";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <TitleHeader />
    <Todos />
  </>
);