var express = require('express');
var router = express.Router();
var printer = require('node-native-printer');

/* GET List Printers. */
router.get('/listPrinters', function(req, res, next) {
  printer.listPrinters().then(printers => {
    console.log(printers);
    res.send({
      "printers": printers
    });
  });
});

/* GET Default Printer Name. */
router.get('/defaultPrinterName', function(req, res, next) {
  printer.defaultPrinterName().then(defaultPrinterName => {
    console.log(defaultPrinterName);
    res.send(defaultPrinterName);
  });
});

/* POST Set Printer */
router.post('/setDefaultPrinter', function(req, res, next) {
  console.log(`Setting printer: ${req.body.printerName}`);
  printer.setPrinter(req.body.printerName).then(resp => {
    res.send(200);
  });
});

/* POST Print Text */
router.post('/printText', function(req, res, next) {
  console.log(`Printing text: ${req.body.text}`);
  printer.printText(req.body.text).then(resp => {
    res.send(200);
  });
});

/* POST Print Text From A Given Printer */
router.post('/printTextFromPrinter', function(req, res, next) {
  console.log(`Printing text: ${req.body.text} on printer ${req.body.printerName}`)
  printer.printText(req.body.text, null, req.body.printerName).then(resp => {
    res.send(200);
  });
});

module.exports = router;
