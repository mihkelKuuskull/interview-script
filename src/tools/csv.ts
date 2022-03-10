import csvToJson from 'csvtojson';
import { createObjectCsvWriter } from 'csv-writer';

export function readCsvFile(path: string) {
    return csvToJson({ delimiter: 'auto' }).fromFile(path);
}

export async function writeCsvFile(path: string, header: { id: string; title: string }[], data: any[]) {
    const writer = createObjectCsvWriter({
        path,
        header,
    });
    await writer.writeRecords(data);
}
