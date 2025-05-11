import { connect } from 'react-redux'
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants'
import { selectCurrentPlayer, selectStatus } from '../../selectors'
import { InformationLayout } from './information-layout'
import { Component } from 'react'

export class InformationContainer extends Component {
	render() {
		const playerAction = PLAYER_ACTION[this.props.status]
		const playerName = PLAYER_NAME[this.props.currentPlayer]
		const information =
			this.props.status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`

		return (<InformationLayout information={information} />)
	}
}

const mapState = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
})

export const Information = connect(mapState)(InformationContainer)