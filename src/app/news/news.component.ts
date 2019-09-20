import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  usaNews:any=[];

  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=3ff678b2f1894f4db798107d57f0e008')
    .subscribe(resData =>
    {
      this.usaNews=resData.articles;
      console.log(this.usaNews);
    })
  }

  ngOnInit() {
  }

}
