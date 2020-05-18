import React from 'react'
import "../styles.scss"
import Link from 'next/link'

export default class Index extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      isActive: false,
	    };
	    this.toggleClass = this.toggleClass.bind(this);
	}

	toggleClass() {
	    //e.preventDefault();
	    //console.log('The link was clicked.');
	    this.setState(state => ({
	    	isActive: !state.isActive
	    }));
	}
   		
    render () {

    	return (

    	<React.Fragment>
			<section className="hero is-primary is-bold hero-home is-small">
				<div className="hero-body">
			    	<div className="container">
			    		<img src="/static/logo.png" />
			    		<h1 className="title">Waqf Network - Platform crowdfunding wakaf uang berbasis blockchain</h1>
			    		<Link href="/send"><a className="button is-info is-medium">Kirim Wakaf Uang</a></Link>&nbsp;&nbsp;
			    		<a className="button is-dark is-medium" onClick={this.toggleClass}>Donasi Via BTC/ETH</a>&nbsp;&nbsp;
			    		<div className={"modal " + (this.state.isActive ? 'is-active' : null)}>
								  <div className="modal-background"></div>
								  <div className="modal-content">
								     <h1 className="title">Prosedur Donasi Via Bitcoin dan Ethereum</h1>
									<p>Email hash transaction anda ke <a href="mailto:adi@waqf.network">adi@waqf.network</a></p>
									<p>Bitcoin Wallet:&nbsp;<a href="https://www.blockchain.com/btc/address/3LTQkAkDMFEpXA3wqxYTC8PomRn4Gzh1mR">3LTQkAkDMFEpXA3wqxYTC8PomRn4Gzh1mR</a></p>
									<p>Ethereum Wallet:&nbsp;<a href="https://etherscan.io/address/0x2B28216E1a9238dBD1d8052565154D5DfF9BCAD9">0x2B28216E1a9238dBD1d8052565154D5DfF9BCAD9</a></p>
								  </div>
								  <button onClick={this.toggleClass} className={"modal-close " + (this.state.isActive ? 'is-active' : null)} aria-label="close" ></button>
								</div>
			    	</div>
			    	
				</div>
				<hr />
				<nav className="level ">
			    	<div className="level-item has-text-centered">
						<div>
						      <p className="title">Rp. 33.000.000</p>
						      <p className="heading">Wakaf uang yang diperlukan</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
						      <p className="title">8</p>
						      <p className="heading">Unit Usaha Siap Wakaf</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
						      <p className="title">Rp. 450.000</p>
						      <p className="heading">Wakaf Disalurkan</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
						      <p className="title">3</p>
						      <p className="heading">Wakif yang telah bergabung</p>
						</div>
					</div>
			    </nav>
			    <br />
			</section>

			<section className="section">
			    	<div className="container">
			    		<p>Wakaf uang adalah salah satu jenis wakaf yang dilakukan seseorang atau kelompok dalam bentuk uang tunai, hukumnya Jawaz dan hanya disalurkan untuk hal-hal yang diperbolehkan secara syar'i. Waqf Network menjadi platform antara Wakif, Nazhir dan Unit Usaha dalam menyalurkan wakaf uang secara tepat, mudah, aman menggunakan teknologi blockchain sehingga bisa di lacak secara transparan dan terbuka oleh semua pihak.</p>
			    	</div>
			</section>

			<section className="hero is-primary is-bold has-text-centered">
			  <div className="hero-body">
			  		<h1 className="title">Entitas Wakaf Uang</h1>
			  		<div className="columns">
					 	<div className="column">
					 		<span className="icon is-large ">
							  <i className="fas fa-3x fa-hands"></i>
							</span>
					 		<h2 className="title is-4">Wakif</h2>
					 		Wakif adalah orang yang berwakaf, dalam hal ini mengeluarkan wakaf uang. Wakif bisa berupa individu perorangan atau kelompok/badan Usaha
					 	</div>
					 	<div className="column">
					 		<span className="icon is-large ">
							  <i className="fas fa-3x fa-handshake"></i>
							</span>
					 		<h2 className="title is-4">Nazhir</h2>
					 		Pengelola dana wakaf, yang menerima dan menyalurkan dan mengelola dana wakaf kepada wakif. Saat ini Waqf Network bekerjasama dengan BMT Muda Surabaya yang memiliki legalitas pengelola wakaf
					 	</div>
					 	<div className="column">
					 		<span className="icon is-large ">
							  <i className="fas fa-3x fa-store "></i>
							</span>
					 		<h2 className="title is-4">Unit Usaha</h2>
					 		Penerima wakaf bisa berupa individu atau UKM yang akan dibantu dengan wakaf uang dengan imbal balik yang lebih rendah dari harga (imbal balik) pasar
					 	</div>
					 	<div className="column">
					 		<span className="icon is-large ">
							  <i className="fab fa-3x fa-connectdevelop"></i>
							</span>
					 		<h2 className="title is-4">Waqf Network</h2>
					 		Platform penghubung antara Wakif, Nazhir dan Bisnis/Unit Usaha, informasi transaksi disimpan di database blockchain decentralized berbasis private/permission network.
					 	</div>
					</div>

			  </div>
			</section>

			

			<section className="section">
				<div className="container">
					<h1 className="title has-text-centered">Lini Masa</h1>
					<div className="timeline is-centered">
					  <header className="timeline-header">
					    <span className="tag is-medium is-primary">Start</span>
					  </header>
					  <div className="timeline-item is-primary">
					    <div className="timeline-marker is-light is-icon">
					    	<i className="fa fa-flag "></i>
					    </div>
					    <div className="timeline-content">
					    	<p className="subtitle">Q4 2018</p>
					    	<ul>
					      	<li>Private Beta Launch</li>
							</ul>
					    </div>
					  </div>
					  <header className="timeline-header">
					    <span className="tag is-primary">2019</span>
					  </header>
					  <div className="timeline-item is-primary">
					    <div className="timeline-marker is-light is-icon">
					      <i className="fa fa-flag"></i>
					    </div>
					    <div className="timeline-content">
					     	<p className="subtitle">Q1 2019</p>
					     	<ul>
					     	<li>Publich Launch</li>
							</ul>
					    </div>
					  </div>
					  <div className="timeline-item is-primary">
					    <div className="timeline-marker is-light is-icon">
					      <i className="fa fa-flag"></i>
					    </div>
					    <div className="timeline-content">
					     	<p className="subtitle">Q2 2019</p>
					      	<ul>
					      	<li>Launching Nationwide</li>
							</ul>
					    </div>
					  </div>
					  
					 
					  <header className="timeline-header">
					    <span className="tag is-primary">2020</span>
					  </header>
					  <div className="timeline-item is-primary">
					    <div className="timeline-marker is-light is-icon">
					      <i className="fa fa-flag"></i>
					    </div>
					    <div className="timeline-content">
					     	<p className="subtitle">Q1 2020</p>
					     	<ul>
					     	<li>Launching Worldwide</li>
							</ul>
					    </div>
					  </div>
					</div>
				</div>
			</section>

			<section className="hero is-dark is-bold has-text-centered">
				<div className="hero-body">
			    	<div className="container has-text-centered">
			    		<h1 className="title">Pendiri Waqf Network</h1>

			  			<div className="columns is-centered">

						 	<div className="column is-one-third">
						 		<nav className="level">
						          <div className="level-item has-text-centered">
						            <figure className="image is-128x128"><a href="http://www.unair.ac.id/site/menu/show/52/lecturer-detail/18-197604132002121003/dr-raditya-sukmana-se-ma">
										<img className="is-rounded 128x128" src="/static/raditya.jpg" alt="Image" /></a>
									</figure>
						          </div>
						        </nav> 
						 		
								 <h2 className="title is-5"><a href="http://www.unair.ac.id/site/menu/show/52/lecturer-detail/18-197604132002121003/dr-raditya-sukmana-se-ma">Dr. Raditya Sukmana</a></h2>
						 		Praktisi wakaf di Indonesia, dosen mata kuliah ekonomi zakat dan wakaf di departemen ekonomi syariah, Fakuktas Ekonomi dan Bisnis Universitas Airlangga Surabaya
						 		
						 	</div>
						 	<div className="column is-one-third">
						 		<nav className="level">
						          <div className="level-item has-text-centered">
							         <figure className="image is-128x128 "><a href="https://linkedin.com/in/adisetiawan">
										<img className="is-rounded" src="/static/adi.jpg" alt="Image" /></a>
									</figure>
						          </div>
						        </nav> 
								
						 		<h2 className="title is-5"><a href="https://linkedin.com/in/adisetiawan">Adi Setiawan</a></h2>
						 		Software engineering yang berpengalaman belasan tahun di pengembangan software development, aktif terlibat di beberapa komunitas tech dan startup di Bali, Indonesia
						 	</div>
						</div>

					</div>
			    </div>
			</section>

		</React.Fragment>


    	)

	}

   
}

