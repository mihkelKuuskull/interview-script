import 'mocha';
import chai, { expect } from 'chai';
import deepEqualInAnyOrder from 'deep-equal-in-any-order';
import path from 'path';
import { disableLogs } from '../src/tools/logger';
import { fixTransactions } from '../src/script';
import { readCsvFile } from '../src/tools/csv';

describe('EXAMPLE TESTS', () => {
    before(() => {
        chai.use(deepEqualInAnyOrder);
        disableLogs();
    });
    it.only('Should return correct count of missing transactions', async () => {
        await fixTransactions();
        console.log('lammas');
        const results = await getResults();
        expect(results.length).to.eq(3);
    });
    it('Should have transactions in result file with correct format', async () => {
        await fixTransactions();
        const results = await getResults();
        expect(results).to.deep.equalInAnyOrder([
            {
                id: '279aa49d-a8fe-4b75-b81e-06d257e00176',
                amount: '50',
                currency: 'PEN',
                name: 'Siim Ramos llayqui',
            },
            {
                id: '1f205afe-e087-4c7d-aa14-0b3dfd7a8de0',
                amount: '8900',
                currency: 'CLP',
                name: 'Peeter Baeza',
            },
            {
                id: 'b1c03499-9942-489d-9853-04017fb2c821',
                amount: '10000',
                currency: 'CLP',
                name: 'Mihkel Salamanca',
            },
        ]);
    });
});

async function getResults() {
    return readCsvFile(path.resolve(__dirname, '../src/files/result.csv'));
}
