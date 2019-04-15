import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post, PostI } from "../models/post";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private apiEndPoint = "posts";

  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get(environment.api + this.apiEndPoint).pipe(
      map((posts: PostI[]) => {
        return posts.map(item => new Post(item));
      })
    );
  }
}
