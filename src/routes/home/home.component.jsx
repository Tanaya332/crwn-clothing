import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  // inside map category is a variable we can 
return (
    <div>
        <Outlet/>
        <Directory />
    </div>

    
  );
}

export default Home;
