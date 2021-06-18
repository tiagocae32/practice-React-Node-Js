import { MoviesProvider } from "../context/moviesContext"
import { UserProvider } from "../context/usersContext";
import {Route} from "wouter"
import Home from "../screens/Home";
import {Login} from "../screens/Login"
import { ListOfMoviesSearched } from "./ListOfMoviesSearched";
import { SingleMovie } from "../screens/SingleMovie";
import { CreateMovie } from "../screens/CreateMovie";


function App() {
  return (
      <MoviesProvider>
          <UserProvider>
                <Route path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/movies/search/:nombre" component={ListOfMoviesSearched} />
                <Route path="/createMovie" component={CreateMovie} />
                <Route path="/movie/:id" component={SingleMovie} />
              </UserProvider>
    </MoviesProvider>
  );
}

export default App;
