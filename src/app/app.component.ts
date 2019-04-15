import { Component } from "@angular/core";
import { PostsService } from "./services/posts.service";
import { Post } from "./models/post";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [PostsService]
})
export class AppComponent {
  title = "Willy Willy";

  public posts: Post[] = [];

  public $posts: Observable<Post[]> = null;

  constructor(private _postService: PostsService) {
    //traiter la donnée
    this._postService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
    });

    //mets de côté tant qu'on en a pas besoin
    // this.$posts = this._postService.getPosts();
  }
}
