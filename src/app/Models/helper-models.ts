export class CardSkills {
   title?:       string;
   description?: string;
   urlImage?:    string;

   constructor(values: Object = {}) {
     (<any>Object).assign(this, values);
   }
 }