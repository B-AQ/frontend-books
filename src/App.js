import React from "react";
import Header from "./Header";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import MyFavoriteBooks from "./BestBooks";
import  Profile  from "react";

class App extends React.Component {

  render() {
    console.log("app", this.props);

    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {
                !isAuthenticated ? <Login /> : <MyFavoriteBooks />
                }
              </Route>
              <Route exact path="/profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              {
                isAuthenticated && <Profile />
                }
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
