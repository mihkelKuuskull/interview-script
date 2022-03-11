# RETRIEVE MISSING DEPOSITS

Our payments system recently suffered a network outage and we have lots of users in customer support asking about missing deposits.  

We have provided you with 2 csv files in `src/files` folder:  
1) `providerTransactions.csv` has the list of all the transactions that happened during the outage. We got that list from our 3rd party payment provider.
2) `walletTransactions.csv` has the list of all the transactions in our database.  

Your task is to find out which transactions we are MISSING and save these into the files folder with the name `missingTransactions.csv` and make sure the transactions format is the same as in `walletTransactions.csv`  

One of our developers already started working on this, you can check `package.json` for available commands to run with `npm run <script-name>`.  
To setup the project, please make sure you have [nodejs](https://nodejs.dev/) installed, then run `npm install` && `npm run build`  