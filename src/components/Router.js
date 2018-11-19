/*<Router>
        <Wrapper>
          { <Route
            exact
            path="/"
            render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
          />
          <Route
            path="/config"
            render={() => (
              <Config
                showDoneTodos={this.state.showDoneTodos}
                onToggle={this.toggleShowDoneTodos}
              />
            )}
          />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/config">
              Config
            </NavLink>
          </nav> }
        </Wrapper>
      </Router>*/
