import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Navigation.scss'
import { navIcon } from '../../utils'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.openTutorial = this.openTutorial.bind(this)
  }

  openTutorial(event) {
    event.preventDefault()
    this.props.openTutorial()
  }

  render() {
    return (
      <div className={styles.main}>
        <ul className={styles.navigation}>
          <li>
            <Link to='/transactions' activeClassName={styles.active}>
              {navIcon('transaction', styles)}
              交易
            </Link>
          </li>
          <li>
            <Link to='/accounts' activeClassName={styles.active}>
              {navIcon('account', styles)}
              账户
            </Link>
          </li>
          <li>
            <Link to='/assets' activeClassName={styles.active}>
              {navIcon('asset', styles)}
              资产
            </Link>
          </li>
          <li>
            <Link to='/balances' activeClassName={styles.active}>
              {navIcon('balance', styles)}
              账单
            </Link>
          </li>
          <li>
            <Link to='/unspents' activeClassName={styles.active}>
              {navIcon('unspent', styles)}
              UTXO
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(
  state => {
    let docVersion = ''

    const versionComponents = state.core.version.match('^([0-9]\\.[0-9])\\.')
    if (versionComponents != null) {
      docVersion = versionComponents[1]
    }

    return {
      routing: state.routing, // required for <Link>s to update active state on navigation
      showSync: state.core.configured && !state.core.generator,
      mockhsm: state.core.mockhsm,
      docVersion
    }
  },
  (dispatch) => ({
    openTutorial: () => dispatch({ type: 'OPEN_TUTORIAL' })
  })
)(Navigation)