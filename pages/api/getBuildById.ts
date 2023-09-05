import { findRecordByFilter } from '../../lib/airtable';

export const getBuildById = async (req: any, res: any) => {
  const { id } = req.query;

  try {
    if (id) {
      const records = await findRecordByFilter(id);

      if (records.length !== 0) {
        res.json(records);
      } else {
        res.json({ message: 'Id could not be found' });
      }
    } else {
      res.status(400);
      res.json({ message: 'Id not found' });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: 'Something went wrong', error });
  }
};
