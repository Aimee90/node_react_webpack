import React from 'react'
import Header from '../Header'

const ASSET_PATH = process.env.ASSET_PATH || '/';


export default class Loading extends React.Component{
	render(){
		const styles = {'text-align':'center','margin-top':'200px'}
		const loadingImg = ASSET_PATH + 'assets/loading_new.gif'
		return (<div style={styles}><Header title="途牛商旅" backPath="/welcome"/><img src={loadingImg} /></div>)
	}
}