import React from 'react';
import '../styles/style.scss'
import GlobalStyles from '../components/styles/GlobalStyles'
import { wrapper } from '../redux/store';
import NextNProgress from '../components/NextNProgress'
import App from 'next/app';
import { AUTHENTICATE_USER } from '../redux/actions/types'
import { getCookie } from '../redux/actions/authAction'

// menerapkan tema ke komponen App
class MyApp extends App{
    render(){
		const {Component, pageProps} = this.props;

		return (
			<>
			  <GlobalStyles/>
				<NextNProgress
				  color="#FFCB11"
				  startPosition={0.3}
				  stopDelayMs={200}
				  height={3}
				  />
				<Component {...pageProps} />
			</>
		  )
	}
}

export default wrapper.withRedux(MyApp);