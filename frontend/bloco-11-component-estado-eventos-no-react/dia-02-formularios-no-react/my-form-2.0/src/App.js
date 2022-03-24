import React from 'react'
import UserData from './components/UserData';
import WorkData from './components/WorkData';

class App extends React.Component{
 render() {
   return(
     <div>
       <UserData />
       <WorkData />
     </div>
   );
 };
}

export default App;
