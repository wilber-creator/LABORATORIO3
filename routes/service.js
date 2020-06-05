var express = require('express');  
var router = express.Router();  
/* GET home page. */  
router.get('/', function(req, res, next) {   
    res.status(200).json({     
        msn: "Hola mundo"   
    });  
}); 

router.post('/test', function(req, res, next) {   
    req.body["msn"]="Por el servidor";
    var data = req.body    
    res.status(200).json(data);  
  });  

  router.post('/divisa', function(req, res, next) {   
    var data = req.body
    var money = req.body.money;
    var cant = req.body.cant;
    var moneda_cambio = req.body.moneda_cambio;
    var divisas = {
        CAD: 1.3256384622,
 HKD: 7.8401345088,
 ISK: 124.6932654731,
 PHP: 52.1294192493,
 DKK: 6.7855130419,
 HUF: 304.6169226575,
 CZK: 23.5135872035,
 GBP: 0.8011724075,
 RON: 4.3155503045,
 SEK: 9.7030809779,
 IDR: 14112.4965918386,
 INR: 70.9474688721,
 BRL: 4.1587748796,
 RUB: 63.6425520313,
 HRK: 6.7290738889,
 JPY: 107.6524584204,
 THB: 30.5643915296,
 CHF: 0.988639462,
 EUR: 0.9088430428,
 MYR: 4.1814959556,
 BGN: 1.7775152231,
 TRY: 5.6850858857,
 CNY: 7.1070617104,
 NOK: 9.0179950922,
 NZD: 1.583931655,
 ZAR: 14.868581296,
 USD: 1,
 MXN: 19.4398800327,
 SGD: 1.3764427883,
 AUD: 1.471326002,
 ILS: 3.5040443515,
 KRW: 1193.9107516132,
 PLN: 3.9819140234,
 BO: 6.96
        
    };
    var cambio=(cant/divisas[money])*divisas[moneda_cambio];
    res.status(200).json({resultado: cambio, moneda: moneda_cambio});   
  });  



  router.post('/interes', function(req, res, next) {   
    var int_comp=0;  
    var monto= req.body.monto;
    var int_anual= req.body.int_anual;
    var tiemp= req.body.tiemp;

      int_comp=monto*(Math.pow((1+(int_anual/100)),tiemp)-1)
    res.status(200).json({interesCompuesto: int_comp});  
  });
 module.exports = router