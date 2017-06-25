const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

/* GET faq page. */
// router.get('/', function(req, res, next) {
//     res.render('faq'); // TODO: Add questions database!
// });

router.get('/', function(req, res){
    var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:27017/teamSimo';

    MongoClient.connect(url, function(err, db) {
        if(err) {
            console.log('Unable to connect to the server!', err);
        } else {
            console.log('Connection Established!')

            var collection = db.collection('faq');

            collection.find({}).toArray(function(err, result) {
                if (err) {
                    res.send(err);
                } else if (result.length) {
                    res.render('faq', {
                        'faqList': result
                    });
                } else {
                    res.send('No documents found!')
                }
            });
        }
    });
});

module.exports = router;
