export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, "User Not Found"],
      [401, "User not authorized"],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return  this.errors.get(code);
    } else {
      return 'Unknown error';
    }
  }
}
