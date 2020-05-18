import React from 'react'
import "../styles.scss"
import Link from 'next/link'

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'


export default class Project extends React.Component {
   	
   	constructor(props) {
	    super(props);
	    this.formatCurrency = this.formatCurrency.bind(this);
	}

	static async getInitialProps({ req, res, ctx }) {
		
		const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	    const getCampaigns = await fetch(baseUrl +'/api/campaign', {
						        		method: "GET", 
        								cache: "no-cache", 
        								credentials: "same-origin",
        								headers: {
							            	"Content-Type": "application/json",
							        	}
			})
  		const json = await getCampaigns.json()
  		let campaigns
  		if(json.success == true) {
  			campaigns = json.data
  		} 

	    return {campaigns}
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
    	//console.log(this.props.campaigns);
    	
    	return (

    	<React.Fragment>
		   <section className="hero is-primary is-bold is-small">
			  <div className="hero-body">
			    <div className="container">
			    	<h1 className="title">Unit Usaha</h1>
			    	<p className="subtitle">Berikut adalah daftar usaha mikro, kecil dan menengah, 
			    	bekerja sama dengan BMT Muda Surabaya yang saat ini aktif mencari pendanaan berbasis wakaf uang</p>
			    </div>
			  </div>
			</section>

			<section className="section">
				<div className="container">
					<div className="columns is-centered is-multiline">
					{this.props.campaigns.map((campaign, index) => (
						<div className="column is-one-third" key="{campaign._id}">
							<Link as={`/project/${campaign._id}`} href={`/business?id=${campaign._id}`}>
							<a>
							<div className="card">
							  <div className="card-image">
							    <figure className="image">
							      <img src={campaign.image} />
							    </figure>
							  </div>
							  <div className="card-content">	    
							    <div className="content">
							      <h1 className="title is-5">
							      {campaign.title}
							      </h1>
							      <hr />
							      <p>Kebutuhan Dana: {this.formatCurrency(campaign.amount)}</p>
							    </div>
							  </div>
							</div>   
							</a>
							 </Link>   
						</div>
					))}						
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

