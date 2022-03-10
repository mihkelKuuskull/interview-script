import { readCsvFile, writeCsvFile } from './tools/csv';
import path from 'path';

export async function fixTransactions() {
    const [providerTransactions, walletTransactions] = await Promise.all([
        readCsvFile(path.resolve(__dirname, '../src/files/providerTransactions.csv')),
        readCsvFile(path.resolve(__dirname, '../src/files/walletTransactions.csv')),
    ]);
    const missingTransactions = [];
    const idTransactions = walletTransactions.map((transaction) => {
        return transaction.id;
    });
    console.log(idTransactions);

    for (const i of providerTransactions) {
        if (idTransactions.includes(i.REFERENCE)) {
            continue;
        } else {
            missingTransactions.push({
                id: i.REFERENCE,
                name: i['SHOPPER NAME'] + ' ' + i['SHOPPER LASTNAME'],
                amount: i.AMOUNT,
                currency: i.CURRENCY,
            });
        }
    }
    console.log(missingTransactions);
    const header = Object.keys(missingTransactions[0]).map((key) => {
        return { id: key, title: key };
    });
    await writeCsvFile(path.resolve(__dirname, '../src/files/results.csv'), header, missingTransactions);

    /*
    console.log(missingTransactions);
    
    for (let i of providerTransactions) {
        if 
    } */
}
