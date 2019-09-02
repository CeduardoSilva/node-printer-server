var express = require('express');
var router = express.Router();
var printer = require('node-native-printer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET List Printers. */
router.get('/listPrinters', function(req, res, next) {
  var list = printer.listPrinters();
  console.log(list);
  res.send(list);
});

/* GET Default Printer Name. */
router.get('/defaultPrinterName', function(req, res, next) {
  var defaultPrinterName = printer.defaultPrinterName();
  console.log(defaultPrinterName);
  res.send(defaultPrinterName);
});

/* POST Set Printer */
router.post('/setPrinter', function(req, res, next) {
  printer.setPrinter(req.body.printerName);
  console.log(`Setting printer: ${req.body.printerName}`);
  res.send(200);
});

/* POST Print Text */
router.post('/printText', function(req, res, next) {
  printer.printText(req.body.text);
  console.log(`Printing text: ${req.body.text}`);
  res.send(200);
});

module.exports = router;
