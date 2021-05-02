import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaderboardPage from "../pages/LeaderboardPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { PrivateRoute } from "../PrivateRoute";
import { GamePage } from "../pages/GamePage";

import "./App.scss";
import "../../assets/vendor/normalize.scss";
import ForumPage from "../pages/ForumPage/ForumPage";
import { SigninPage } from "../pages/SigninPage/SigninPage";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

class App extends Component {

    render(): JSX.Element {
        return (
                <BrowserRouter>
                    <Switch>
                        <ErrorBoundary>
                            <Route path="/" exact>
                                <div>main</div>
                            </Route>
                            <Route path="/login">
                                <SigninPage />
                            </Route>
                            <Route path="/signup">
                                <SignupPage />
                            </Route>
                            <PrivateRoute path="/profile">
                                <ProfilePage />
                            </PrivateRoute>
                            <PrivateRoute path="/leaderboard">
                                <LeaderboardPage />
                            </PrivateRoute>
                            <PrivateRoute path="/forum">
                                <ForumPage />
                            </PrivateRoute>
                            <PrivateRoute path="/game">
                                <GamePage />
                            </PrivateRoute>
                        </ErrorBoundary>
                        <Route path="*">
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </BrowserRouter>

        );
    }
}

export default App;
