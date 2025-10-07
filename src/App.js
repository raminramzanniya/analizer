import './App.css';
import Routes from './Routes';
import {useRoutes} from 'react-router-dom';
import TopBar from './Components/TopBar/TopBar';
import SideBar from './Components/SideBar/SideBar';


export default function App() {

    let router=useRoutes(Routes)

  return (
    <>
      <TopBar/>
    <div className='container-main'>  
      <SideBar/>
      {router}
    </div>
    </>
  )
}