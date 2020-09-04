export default interface ICall {
  type: '1° conversa' | '2° conversa' | '3° conversa' | 'Estudo bíblico';
  time: string;
  publication: string;
  date: Date;
  comments: string;
}
