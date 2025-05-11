import { Component } from 'react'
import PropTypes from 'prop-types'
export class InformationLayout extends Component {
	static propTypes = {
		information: PropTypes.string
	};
	render() {
		return <div>{this.props.information}</div>
	}
}