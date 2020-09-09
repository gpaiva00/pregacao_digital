export default interface ICall {
  id: number;
  type: '1° Conversa' | '2° Conversa' | '3° Conversa' | 'Estudo Bíblico';
  time: string;
  publication: string;
  date: string;
  comments: string;
}
