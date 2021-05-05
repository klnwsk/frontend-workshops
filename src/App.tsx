import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SubTitle, Title } from "./components/components";
import { CompoundComponents } from "./views/compound-components/compound-components";
import { StateReducer } from "./views/state-reducer/state-reducer";

const routes = [
  {
    path: "/compound-components",
    component: <CompoundComponents />,
    name: "Compound components",
  },
  {
    path: "/state-reducer",
    name: "State reducer",
    component: <StateReducer />,
  },
  { path: "/", name: "Home", component: <Home /> },
];

function Home() {
  return (
    <>
      <Title>Frontend meeting</Title>
      <SubTitle> Notes and other reflections</SubTitle>

      <ul>
        {routes.map(
          (route) =>
            route.path !== "/" && (
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <div className="App py-6 bg-indigo-900 min-h-screen">
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path}>{route.component}</Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}
