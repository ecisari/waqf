import React from 'react'
import Link from 'next/link'

export default class Footer extends React.Component {
  
  render () {
    
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="content is-small has-text-centered">

            <blockquote>
            <h2>لَن تَنَالُوا۟ ٱلْبِرَّ حَتَّىٰ تُنفِقُوا۟ مِمَّا تُحِبُّونَ ۚ وَمَا تُنفِقُوا۟ مِن شَىْءٍ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌ</h2>
            <br />" Kamu sekali-kali tidak akan sampai kepada kebaikan (yang sempurna) sebelum kamu menafkahkan sebahagian harta yang kamu cintai, dan apa saja yang kamu nafkahkan maka sesungguhnya Allah mengetahuinya " ( QS. Ali Imran : 92)
            </blockquote>
            
            <p>
              Copyright &copy; 2018 Waqf Network<br />
              All rights reserved
            </p>
          </div>
        </footer>
      </React.Fragment>
    )
    
  }

}