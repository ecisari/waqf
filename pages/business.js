import React from 'react'
import "../styles.scss"
import Link from 'next/link'

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

import Head from 'next/head'


export default class Business extends React.Component {
   	
   	constructor(props) {
	    super(props);
	    this.formatCurrency = this.formatCurrency.bind(this);
	}

	static async getInitialProps({ req, res, query, ctx }) {
		
		//const id = query.id
		const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';

		let campaign

		//console.log(baseUrl);

	    const getCampaign = await fetch(baseUrl +'/api/campaign/' + query.id, {
						        		method: "GET", 
        								cache: "no-cache", 
        								credentials: "same-origin",
        								headers: {
							            	"Content-Type": "application/json",
							        	}
			})
  		const json = await getCampaign.json()

  		
  		
  		if(json.success == true) {
  			campaign = json.data
  		} 

  		//console.log(campaign);

	    return {campaign}
	}

	formatCurrency(amount) {
		const formatter = new Intl.NumberFormat('id-ID', {
			  style: 'currency',
			  currency: 'IDR',
			  minimumFractionDigits: 0
		})
		return formatter.format(amount);
	}
	
    render () {
    	
    	//console.log(this.props.campaign.youtube)

    	return (

    	<React.Fragment>
    		
    		<Head>
          		<title>{this.props.campaign.title} di Waqf Network</title>
          		<meta property="og:type"          content="website" />
  				<meta property="og:title"         content={`${this.props.campaign.title} di Waqf Network`} />
  				<meta property="og:description"   content={`${this.props.campaign.title} di Waqf Network`} />
  				<meta property="og:image" content={this.props.campaign.image} />
        	</Head>

		   <section className="hero is-light is-small">
			  <div className="hero-body">
			    <div className="container">
			    	<h1 className="title">{this.props.campaign.title}</h1>
			    	<div className="columns">
			    		<div className="column">
			    			<div className="video-container">
							  <iframe width="640" height="360" src={`https://www.youtube.com/embed/${this.props.campaign.youtube}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
							</div>
			    		</div>
			    		<div className="column is-one-third">
			    		<h2 className="title is-3 has-text-info">{this.formatCurrency(this.props.campaign.amount)}</h2>
			    		<Link href="/send"><a className="button is-info is-large">Kirim Wakaf Uang</a></Link>
			    		</div>
			    	</div>
			    </div>
			  </div>
			</section>

			<section className="section">
			    <div className="container">
			    	<div className="columns">
			    		<div className="column">
			    			{this.props.campaign.description}
			    		</div>
			    		<div className="column is-one-third">
			    			<h2 className="title is-3 has-text-info">Daftar Wakif</h2>
			    		</div>
			    	</div>
			    	
			    </div>
			</section>

			<section className="hero is-dark is-bold is-small">
			  <div className="hero-body">
			    <div className="container">
			    	<h1 className="subtitle"><strong>Bergabung di Waqf Network</strong></h1>
			    	<p>Silahkan hubungi kami jika anda adalah bagian dari <strong>unit usaha</strong> atau <strong>Badan Penyalur Wakaf</strong> yang saat ini 
			    	sedang mencari pendanaan berbasis wakaf uang serta tertarik bergabung di Waqf Network</p>
			    </div>
			  </div>
			</section>

		   </React.Fragment>


    	)

	}

   
}

