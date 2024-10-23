class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.state = {
      isLoggedIn: false, // private data
      isHomePage: true   // tracking if on the homepage
    };
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true, isHomePage: false});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false, isHomePage: false});
  }
  
  handleHomeClick() {
    this.setState({isHomePage: true});
  }

  render() {
    const { isLoggedIn, isHomePage } = this.state;
    let button;

    if (isHomePage) {
      button = <LoginButton onClick={this.handleLoginClick} />;
    } else if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} isHomePage={isHomePage} />
        {button}
        {!isHomePage && <HomeButton onClick={this.handleHomeClick} />}
      </div>
    );
  }
}

// render komponen ke RealDOM
ReactDOM.render(<LoginControl />, document.getElementById("app"));