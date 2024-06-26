import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MasterService } from './core/master.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  loadedPosts = [];
  constructor(private master: MasterService){}

}
//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchPosts();
//   }

//   onCreatePost(postData: { title: string; content: string }) {
//     // Send Http request
//     this.http
//       .post(
//         'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
//         postData
//       )
//       .subscribe(responseData => {
//         console.log(responseData);
//       });
//   }

//   onFetchPosts() {
//     // Send Http request
//     this.fetchPosts();
//   }

//   onClearPosts() {
//     // Send Http request
//   }

//   private fetchPosts() {
//     this.http
//       .get('https://ng-complete-guide-c56d3.firebaseio.com/posts.json')
//       .pipe(
//         map(responseData => {
//           const postsArray = [];
//           for (const key in responseData) {
//             if (responseData.hasOwnProperty(key)) {
//               postsArray.push({ ...responseData[key], id: key });
//             }
//           }
//           return postsArray;
//         })
//       )
//       .subscribe(posts => {
//         // ...
//         console.log(posts);
//       });
//   }

// }
