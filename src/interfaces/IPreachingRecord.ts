import ICall from './ICall';

export default interface IPreachingRecord {
  personName: string;
  phone?: string;
  address?: string;
  calls: ICall[];
}
