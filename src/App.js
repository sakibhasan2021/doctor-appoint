import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import MoreService from './Component/MoreService/MoreService';
import Service from './Component/Service/Service';
import Register from './Component/Register/Register';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRouting from './Component/PrivateRouting/PrivateRouting';
import AppointList from './Component/AppointList/AppointList';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
   
    <div>
      <AuthProvider>
        <Router>
        
              <Header/>

           
                      <Route  exact path="/">
                       
                        <Banner/>
                        <Service/>
                        <Footer/>
                      </Route>
                       <Route   path="/banner">
                         <Banner/> 
                      </Route>
                        <PrivateRouting path='/moreservice/:id' children={<MoreService/>}>
                                   
                        </PrivateRouting>
                         <PrivateRouting path='/appointList/:name' children={<AppointList/>}>
                                   
                        </PrivateRouting>
                       <Route   path="/Service">
                         <Service/> 
                      </Route>
                      
                      <Route   path="/login">
                         <Login/> 
                      </Route>
                      <Route   path="/register">
                         <Register/> 
                      </Route>
                      <Route   path="*">
                         <NotFound/>
                      </Route>
            
      </Router>
      </AuthProvider>
    </div>
    
  );
}

export default App;
// making Header
// banner with text and image
// at least 6 cards
// footer 