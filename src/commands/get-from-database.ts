import { listRecords } from '../local-nosql';
import { assetRt } from '../models/asset';

export async function main() {
  const records = await listRecords();
  const data = records.map(record => assetRt.check(record));
  
  data.map(record => {
    if (record.kind === 'banana-asset') {
      record.
    }

    if (record.kind === 'computer-asset') {
      record.
    }
  })
}

main();
