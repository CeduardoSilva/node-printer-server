# Node Printer Server

## Requirements
- Node.JS Version 6.11.3
- NPM Version 3.10.10

## Installation


## Endpoints

### GET /listPrinters
    Returns an array of strings with the names of the printers installed in the system.
### GET /defaultPrinterName
    Returns the name of the default printer in the system.
### POST /setDefaultPrinter
    Sets the default printer in the system. Consumes a JSON as following:

    {
        "printerName": "name"
    }

### POST /printText
    Prints a text using the default printer in the system. Consumes a JSON as following:

    {
        "text": "Text to be printed"
    }

### POST /printTextFromPrinter
    Prints a text using the specified printer in the request. Consumes a JSON as following:

    {
        "text": "Text to be printed",
        "printerName": "name"
    }
