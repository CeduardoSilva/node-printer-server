# Node Printer Server

## Requirements
- Node.JS Version 6.11.3
- NPM Version 3.10.10

## Installation

1) Install Node.JS 6.11.3 and NPM 3.10.10
- Download the installer at the following link: https://nodejs.org/dist/v6.11.3/node-v6.11.3-x64.msi
- Follow the installation instructions.

2) Executer the server 
- At the root directory of the project execute the command
```
   $ npm start
```
- If no errors are displayed the server will be listening at port 3000.

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
