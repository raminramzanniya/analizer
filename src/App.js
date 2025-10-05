import './App.css';
import Routes from './Routes';
import {useRoutes} from 'react-router-dom';
import TopBar from './Components/TopBar/TopBar';

export default function App() {

    let router=useRoutes(Routes)

  return (
    <div>
      <TopBar/>
      {router}
      </div>
  )
}