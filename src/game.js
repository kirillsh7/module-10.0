import { connect } from 'react-redux'
import { GameLayout } from './game-layout'
import { RESTART_GAME } from './actions'
import { Component } from 'react'
export class GameContainer extends Component {
	render() {
		const handleRestart = () => {
			this.props.dispatch(RESTART_GAME)
		}
		return <GameLayout handleRestart={handleRestart} />
	}
}

export const Game = connect(null,)(GameContainer)