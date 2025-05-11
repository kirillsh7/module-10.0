import PropTypes from 'prop-types'
import { Field, Information } from './components'
import { Component } from 'react'

export class GameLayout extends Component {
	static propTypes = {
		handleRestart: PropTypes.func,
	}

	render() {
		return (
			<div className='flex flex-col text-center w-[303px] m-auto'>
				<Information />
				<Field />
				<button className='p-1 w-[160px] mt-4 m-auto border border-black rounded-lg ' onClick={this.props.handleRestart}>
					Начать заново
				</button>
			</div>
		)
	}
}