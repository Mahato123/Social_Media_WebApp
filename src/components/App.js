import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';

import { Home,Login, Signup,Settings,UserProfile} from '../pages';
import { Loader,Navbar } from './';
import { useAuth } from '../hooks';


function PrivateRoute({ children,...rest }){
  
  const auth=useAuth()
  
  // return <Route 
  // {...rest}

  //  render={()=>{
    if(auth.user){
      return children;
    }else{
      return <Navigate to="/login" />
    }

  //  }}
  // />
}


const About =() =>{

  return <h1>About</h1>;

};

const UserInfo =() =>{

  return <h1>User</h1>;
  
};
const Page404 =() =>{

  return <h1>404</h1>;
  
};

function App() {
  
  const auth=useAuth();


  if (auth.loading) {
    return <Loader />;
  }

  return (
    <Router>
      
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={[]} />}>
     
      </Route>

      <Route path="/login" element={<Login />}>
     
      </Route>
      
      <Route path="/signup" element={<Signup />}>

        </Route>

        <Route path="/settings" element={<PrivateRoute>
          <Settings /></PrivateRoute>}>

        </Route>

        <Route path="/user/:userId" element={<UserProfile />}>

        </Route>




     

      <Route path="/about" element={<About />}>
     
      </Route>

      <Route path="/user/asdasd" element={ <UserInfo/>}>
      </Route>

      <Route path="/page404" element={ <Page404/>}>
      </Route>



      </Routes>
      </div>
      
      </Router>
    
  );
}

export default App;
