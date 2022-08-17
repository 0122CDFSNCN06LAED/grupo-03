import { Route, Switch } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Footer from "./Footer";
import GenresInDbCard from "./GenresInDBCard";
import LastMovieInDb from "./LastMovieCard";
import ListaUsuarios from "./ListaUsuarios";
import ListaProductos from "./ListaProductos";
import MoviesList from "./MoviesList";
import TopBar from "./TopBar";
import { DetalleUsuario } from "./DetalleUsuario";
import { DetalleProductos } from "./DetalleProductos";

function MainContent() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={DashboardContent} />
            <Route path="/genres" component={GenresInDbCard} />
            <Route path="/last-movie" component={LastMovieInDb} />
            <Route path="/movies" component={MoviesList} />
            <Route path="/users/:id" component={DetalleUsuario}/>
            <Route path="/users" component={ListaUsuarios} />
            <Route path="/products/:id" component={DetalleProductos} />
            <Route path="/products" component={ListaProductos} />
          </Switch>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainContent;
