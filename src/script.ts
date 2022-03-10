import { readCsvFile } from './tools/csv';
import path from 'path';

export async function fixTransactions() {
    const [providerTransactions, walletTransactions] = await Promise.all([
        readCsvFile(path.resolve(__dirname, '../src/files/providerTransactions.csv')),
        readCsvFile(path.resolve(__dirname, '../src/files/walletTransactions.csv')),
    ]);
}
