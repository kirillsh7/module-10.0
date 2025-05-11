import { PLAYER, PLAYER_SIGN } from '../../constants'
import { Component } from 'react'
import PropTypes from 'prop-types'

export class FieldLayout extends Component {
	static propTypes = {
		field: PropTypes.arrayOf(
			PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
		),
		handleCellClick: PropTypes.func,
	};
	render() {
		return <div className='flex flex-wrap w-[302px] m-auto border border-black'>
			{this.props.field.map((cellPlayer, index) => (
				<button
					key={index}
					className='w-[100px] h-[100px] text-[50px] border border-black'
					onClick={() => this.props.handleCellClick(index)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	}
} 