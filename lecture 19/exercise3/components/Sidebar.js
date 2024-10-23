// create component sidebar
//<div class="fakeimg" style={{height: "150px;"}}>Image</div>
				
class SidebarPage extends React.Component {
	render() {
		// return JSX
		return(
			<div class="side">
				<h2>Write Chat:</h2>
				<textarea class="textareachat" rows="5"></textarea>
				<button>Send Chat</button> 
			</div>
		);
	}
}
