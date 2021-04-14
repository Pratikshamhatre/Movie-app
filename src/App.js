import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Movie from './Movie';


function App() {
  return (
 
<div className="container">


      <Router>

        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={Movie} />


      </Router>
</div>

  );
}

export default App;
