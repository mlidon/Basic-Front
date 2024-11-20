export class CardSkills {
  title?:       string;
  description?: string;
  urlImage?:    string;

   constructor(values: Object = {}) {
     (<any>Object).assign(this, values);
   }
}

export class MenuHeader {
  title?:       string;
  link?:        string;
  fragment?:    string;
  icon?:        string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}