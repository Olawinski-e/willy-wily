export interface PostI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class Post implements PostI {
  public userId: number = null;
  public id: number = null;
  public title: string = "";
  public body: string = "";

  // constructor(
  //   title: string = "",
  //   id: number = null,
  //   body: string = "",
  //   userId: number = null
  // ) {
  //   this.title = title;
  //   this.id = id;
  //   this.body = body;
  //   this.userId = userId;
  // }

  constructor(options: PostI = null) {
    this.title = options.title;
    this.id = options.id;
    this.body = options.body;
    this.userId = options.userId;
  }

  public getContentSubStr(key: string = "title", sub: number = 100): string {
    if (["title", "body"].includes(key) && sub > 0) {
      return this[key].slice(0, sub);
    }
    return "";
  }

  //   constructor(options = ({} = null)) {
  //     if (options) {
  //       Object.assign(this, options);
  //     }
  //   }
}
