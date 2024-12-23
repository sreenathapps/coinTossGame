import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coin: 'heads',
    total: 0,
  }

  onClickButton = () => {
    const random = Math.floor(Math.random() * 2)
    const coin = random === 0 ? 'heads' : 'tails'
    this.setState(prevState => ({
      coin,
      total: prevState.total + 1,
    }))
  }

  render() {
    const {coin, total} = this.state
    const heads =
      coin === 'heads' ? Math.ceil(total / 2) : Math.floor(total / 2)
    const tails = total - heads
    const imageUrl = `https://assets.ccbp.in/frontend/react-js/${coin}-img.png`

    return (
      <div className="bg-container">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="title">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-logo" />
          <button type="button" className="btn" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="stats">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
