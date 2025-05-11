import { connect } from 'react-redux'
import { FieldLayout } from './field-layout'
import { checkEmptyCell, checkWin } from '../../utils'
import { setCurrentPlayer, setField, setStatus } from '../../actions'
import { selectCurrentPlayer, selectField, selectStatus } from '../../selectors'
import { PLAYER, STATUS } from '../../constants'
import { Component } from 'react'

export class FieldContainer extends Component {
	handleCellClick = (cellIndex) => {
		const { status, field, currentPlayer, dispatch } = this.props
		if (status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) { return }

		const newField = [...field]

		newField[cellIndex] = currentPlayer

		dispatch(setField(newField))

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN))
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS
			dispatch(setCurrentPlayer(newCurrentPlayer))
		} else {
			dispatch(setStatus(STATUS.DRAW))
		}
	}
	render() {
		return <FieldLayout field={this.props.field} handleCellClick={this.handleCellClick} />
	}
}

const mapState = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
	field: selectField(state),
})
export const Field = connect(mapState)(FieldContainer)