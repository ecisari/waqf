import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Router from 'next/router'


class Layout extends React.Component {
  
  constructor(props) {
      super(props);
  }

  render () {
    //console.log(this.props)
    const {children} = this.props
    return (
      <React.Fragment>
        <Navbar isauth={this.props.isauth} />
        {children}
        <Footer />
      </React.Fragment>
    )
    
  }

}

export default class MyApp extends App {
  
  constructor(props) {
      super(props);
  }

  static async getInitialProps({ Component, query, req, res, ctx }) {
    //console.log(ctx.req)

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
     
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    //console.log(pageProps)
    //console.log(pageProps.isauth)
    return (
      <Container>
        <Head>
          <title>Crowdfunding wakaf uang berbasis blockchain - Waqf Network </title>
        </Head>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }

}