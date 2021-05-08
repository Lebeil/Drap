import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
