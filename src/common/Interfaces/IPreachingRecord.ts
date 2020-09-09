import ICall from './ICall';

export default interface IPreachingRecord {
  id: number;
  personName: string;
  type: string;
  publication: string;
  phone?: string;
  address?: string;
  calls: ICall[];
}
