import React from 'react'
import "../styles.scss"


export default class Error extends React.Component {
  
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <React.Fragment>
        <div className="section has-text-centered">
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
        </div>
      </React.Fragment>
    )
  }
}