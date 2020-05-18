import React from 'react'
import "../styles.scss"
import Link from 'next/link'
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

const ConfirmSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'Isian terlalu sedikit')
    .max(100, 'Isian terlalu panjang')
    .required('Nama Lengkap Mohon di isi'),
  phone: Yup.string()
    .min(5, 'Isian terlalu sedikit')
    .max(12, 'Isian terlalu panjang')
    .required('Nomor HP Mohon di isi'),
  amount: Yup.string()
    .min(3, 'Isian terlalu sedikit')
    .max(100, 'Isian terlalu panjang')
    .required('Jumlah Mohon di isi'),
  transactiondate: Yup.string()
    .min(3, 'Isian terlalu sedikit')
    .max(100, 'Isian terlalu panjang')
    .required('Jam dan tanggal Mohon di isi'),
  accountname: Yup.string()
    .min(3, 'Isian terlalu sedikit')
    .max(100, 'Isian terlalu panjang')
    .required('Nomor Rekening Mohon di isi'),
  bankname: Yup.string()
    .min(3, 'Isian terlalu sedikit')
    .max(100, 'Isian terlalu panjang')
    .required('Nama Bank Mohon di isi'),
});

export default class Send extends React.Component {
   	
   	constructor(props) {
	    super(props);
	  }
	
    render () {
    
    	return (

    	<React.Fragment>
		   <section className="hero is-primary is-bold is-small">
			  <div className="hero-body">
			    <div className="container">
			    	<h1 className="title">Prosedur Wakaf Uang</h1>
			    </div>
			  </div>
			</section>

			<section className="section">
				<div className="container">

					<p>
							Untuk menjadi Wakif di Waqf Network, silahkan transfer wakaf uang anda melalui rekening dibawah ini.
							<br />Gunakan kode unik contoh: Rp.50.123 untuk memudahkan kami melakukan pengecekan wakaf uang anda.
							</p>
							<br />
							<p>Jika anda mengalami kesulitan silahkan <a href="https://api.whatsapp.com/send?phone=6281999556735&text=Halo%2C%20saya%20ingin%20konsultasi%20seputar%wakaf%uang">Whatsapp Kami 081999556735</a></p>
							<br />
							
							<div className="columns">
								<div className="column">
									<div className="notification is-info">
									<h2><strong>Koperasi BMT Muda Jatim</strong></h2>
									<h3>Bank Syariah Mandiri Jemursari Surabaya</h3>
									<h3>No Rekening: 7097575888</h3>
									</div>
								</div>
								<div className="column">
									<blockquote>
										<h2><strong>Tentang BMT Muda Jatim</strong></h2>
										<p>BMT Muda adalah koperasi berbasis syariah dengan solusi pembiayaan NON RIBA</p>
										<p><a href="http://www.bmtmuda.com">http://www.bmtmuda.com</a></p>
									</blockquote>
								</div>
							</div>

							<div className="notification is-warning">PENTING! Setelah melakukan transfer harap segera mengisi form berikut untuk melakukan konfirmasi</div>
							
							
							<Formik 
						        initialValues={{
						        	fullname: '',
						        	phone: '',
						        	amount: '',
						        	transactiondate: '',
						        	accountname: '',
						        	bankname: '',
						    		}} 
						        validationSchema={ConfirmSchema} 
						        onSubmit={async (values, actions) => {
						        	const res = await fetch('/api/confirm', {
						        		method: "POST", 
        								cache: "no-cache", 
        								credentials: "same-origin",
        								headers: {
							            	"Content-Type": "application/json",
							        	},
        								body: JSON.stringify(values)
						        	})
  									const json = await res.json()
  									if(json.success == true) {
  										actions.setStatus({ msg: 'Terimakasih atas konfirmasi anda, kami akan segera melakukan pengecekan data' });
  									} else {
  										actions.setStatus({ msg: json.msg });
  									}

						          //console.log(json);
						          actions.setSubmitting(false);
						        }}
						        render={({ errors, status, touched, isSubmitting }) => (
						          <Form>
						          	{status && status.msg && <div className="notification is-info">{status.msg}</div>}
						          	<div className="columns">
						          		<div className="column">
						          			<div className="field">
												<div className="control">
													<label className="label">Nama</label>
													<Field className="input" placeholder="Nama Lengkap" type="text" name="fullname" />
												</div>
												<ErrorMessage name="fullname">
								              		{errorMessage => <p className="help is-danger">{errorMessage}</p>}
								            	</ErrorMessage>
											</div>
											<div className="field">
												<div className="control">
													<label className="label">Nomor HP</label>
													<Field className="input" placeholder="Nomor HP" type="text" name="phone" />
												</div>
												<ErrorMessage name="phone">
								              		{errorMessage => <p className="help is-danger">{errorMessage}</p>}
								            	</ErrorMessage>
											</div>
								           <div className="field">
												<div className="control">
													<label className="label">Jumlah Uang</label>
													<Field className="input" placeholder="Jumlah Uang" type="text" name="amount" />
												</div>
												<ErrorMessage name="amount">
								              		{errorMessage => <p className="help is-danger">{errorMessage}</p>}
								            	</ErrorMessage>
											</div>
						          		</div>
						          		<div className="column">
						          			<div className="field">
												<div className="control">
													<label className="label">Jam dan Tanggal Transaksi</label>
													<Field className="input" placeholder="Jam dan tanggal transaksi" type="text" name="transactiondate" />
												</div>
												<ErrorMessage name="transactiondate">
								              		{errorMessage => <p className="help is-danger">{errorMessage}</p>}
								            	</ErrorMessage>
											</div>
											<div className="field">
												<div className="control">
													<label className="label">Nama Pemilik Rekening</label>
													<Field className="input" placeholder="Nama Pemilik Rekening" type="text" name="accountname" />
												</div>
												<ErrorMessage name="accountname">
								              		{errorMessage => <p className="help is-danger">{errorMessage}</p>}
								            	</ErrorMessage>
											</div>
											<div className="field">
												<div className="control">
													<label className="label">Nama Bank</label>
													<Field className="input" placeholder="Nama Bank" type="text" name="bankname" />
												</div>
												<ErrorMessage name="bankname">
								              		{errorMessage => <p className="help is-danger">{errorMessage}</p>}
								            	</ErrorMessage>
											</div>
						          		</div>
						          	</div>
						          	
									

						            
						            
						            <button className="button is-link" type="submit" disabled={isSubmitting}>
						              Konfirmasi
						            </button>
						          </Form>

						        )}
						      />

					

				</div>
			</section>

		   </React.Fragment>


    	)

	}

   
}

