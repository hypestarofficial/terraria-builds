const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'keyAKOsECACNSvuG9' }).base(
  'appw2114G0hn9ck4X'
);

const table = base('builds');

export const getMinifiedRecord = (record: { id: any; fields: any }) => {
  return {
    recordId: record.id,
    ...record.fields,
  };
};

export const getMinifiedRecords = (records: any[]) => {
  return records.map((record) => {
    return getMinifiedRecord(record);
  });
};

export const findRecordByFilter = async (id: number) => {
  const findBuildRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getMinifiedRecords(findBuildRecords);
};
