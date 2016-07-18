export class Message {
  text: string;
  author: string;
  time: string;

  constructor(text: string, author: string) {
    this.text = text;
    this.author = author;
    this.time = new Date().toISOString();

    console.log(this.time);
  }
}
