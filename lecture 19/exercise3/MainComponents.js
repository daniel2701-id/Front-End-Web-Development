"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div>
			<HeaderPage />
			<NavbarPage />
			<div class="row">
				<SidebarPage />
				<ContentPage />
			</div>
			<FooterPage />
		</div>
    );
  }
}
// render elements to DOM
ReactDOM.render(<App />, document.getElementById("app"));
