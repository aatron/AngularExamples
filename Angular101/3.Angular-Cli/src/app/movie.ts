export class Movie {
  constructor(public title = '', public tags: string[] = []) { }
  clone() { return new Movie(this.title, this.tags); }
}
