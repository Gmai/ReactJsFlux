import React from "react"
import ReactDOM from "react-dom"

class ByeWorld extends React.Component {
	render() {
		return (
			<p>Hello, {this.props.greetTarget}!</p>
		);
	}
}

ReactDOM.render(
	<div>
		<ByeWorld greetTarget="Batman" />
		<ByeWorld greetTarget="Spider man" />
		<ByeWorld greetTarget="Venon" />
		<ByeWorld greetTarget="Iron Man" />
		<ByeWorld greetTarget="Nicolas Cage" />
		<ByeWorld greetTarget="Mega Man" />
		<ByeWorld greetTarget="Bonooo" />
		<ByeWorld greetTarget="Catwoman" />
	</div>
	,
	document.getElementById("container")
);

