export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't istantiane Abstract, only concrete one.`);
    }
  }
}
