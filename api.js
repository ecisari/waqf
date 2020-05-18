//config
const JWTSECRET = 'jf93nsg9hfncval';
const MG_DOMAIN = 'mg.dev.my.id';
const MG_FROMEMAIL = 'postmaster@mg.dev.my.id';
const MG_APIKEY = 'key-fbe567adfdba5c9e32722f75de9ceea4';
const MONGODB = 'mongodb+srv://waqf:yfrBUCvddAReP9zP@cluster0-mgr31.mongodb.net/waqf?retryWrites=true';
//const MONGODB = 'mongodb://127.0.0.1:/waqf';

//include lib
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rp = require('request-promise-native');


//helper function

const sendConfirm = async function(data) {
    
    try {
    	const URL = 'https://api.mailgun.net/v3/' + MG_DOMAIN + '/messages';
    	const mgauth = {
		    username : 'api',
		    password: MG_APIKEY
		  }
      let message = "Terimakasih atas konfirmasi wakaf uang anda, kami akan segera memproses dan menghubungi anda\n";

       message = message + 'Nama: ' + data.fullname + "\n";
       message = message + 'Nomor HP: ' + data.phone + "\n";
       message = message + 'Jumlah: ' + data.amount + "\n";
       message = message + 'Jam/tgl transaksi: ' + data.transactiondate + "\n";
       message = message + 'Nama Rekening: ' + data.accountname + "\n";
       message = message + 'Nama Bank: ' + data.bankname + "\n";

    	const options = {
              method: 'POST',
              uri: URL ,
              auth: mgauth,
              form: {
                  from : 'Waqf Network <'+ MG_FROMEMAIL +'>',
                  to : 'adi@waqf.network',
                  subject : 'Konfirmasi Wakaf Uang',
                  text : message
              },
              json: true // Automatically stringifies the body to JSON
          };
      	return await rp(options);

    } catch(err) {
      throw new Error(err);

    }

}

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(helmet());

//database connect
mongoose.connect(MONGODB, {
	useNewUrlParser: true,
	autoIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("connection open");
});

//user model
const CampaignSchema = new mongoose.Schema({
        title: {
            type: String,
            default: '',
        },
        youtube: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        amount: {
            type: Number,
            default: 0,
        },
        createdate: {
            type: Date,
            default: Date.now
        },
        isactive: {
            type: Boolean,
            default: true,
        },
        news: [{
          description: {
            type: String, 
            default: '',
          },
          created: {
            type: Date,
            default: Date.now
          },
        }],
    },
);

CampaignSchema.index({ 
    email: 'text',
});


let Campaign = mongoose.model('Campaign', CampaignSchema);



//campaign detail
router.get('/campaign', async function (req, res) {
  
  try {
    //check valid ObjectId

    let campaigns = await Campaign.find({isactive: true}).
    exec();

    res.json({success: true, data: campaigns});
  
  } catch (err) {
    res.json({success: false, msg: err.message});
  }

});

//campaign detail
router.get('/campaign/:id', async function (req, res) {
  
  try {
    //check valid ObjectId
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.json({success: false, msg: 'invalid ID'});
    }

    let campaign = await Campaign.findById({_id: req.params.id}).
    exec();

    res.json({success: true, data: campaign});
  
  } catch (err) {
    res.json({success: false, msg: err.message});
  }

});


//confirm payment
router.post('/confirm', async function (req, res) {
  
	// execute only if there's no admin user
	try {
    	let data = {
            fullname : req.body.fullname,
            phone : req.body.phone,
            amount : req.body.amount,
            transactiondate : req.body.transactiondate,
            accountname : req.body.accountname,
            bankname : req.body.bankname,
        };
        
        await sendConfirm(data);
        res.json({success: true});
  
	} catch (err) {
    	res.json({success: false, msg: err.message});
	}

});


//add new campaign
router.post('/campaign', async function (req, res) {
  
  // execute only if there's no admin user
  try {
    
    let data = {
            title : req.body.title,
            youtube : req.body.youtube,
            image : req.body.image,
            description : req.body.description,
            amount : req.body.amount
    };
        
        let campaign = new Campaign(data);
        let newCampaign = await campaign.save();
        if(newCampaign) {
          res.status(201).json({success: true, data: newCampaign});
        } else {
          res.json({success: false, msg: err.message});
        }
  
  } catch (err) {
      res.json({success: false, msg: err.message});
  }

});


router.get('/',  function (req, res) {
  res.json({success: true, msg: 'Waqf Network API'});
});


module.exports = router;