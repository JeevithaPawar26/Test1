import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { UsersComponent } from './users/users.component';
import { ReducePipe } from './reduce.pipe';
import { CustomPipe } from './custom.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MoviesComponent,
    FirebaseComponent,
    UsersComponent,
    ReducePipe,
    CustomPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:' ', component: HomeComponent },
      { path:'news', component: NewsComponent },
      {path:'movies', component: MoviesComponent},
      {path:'firebase', component: FirebaseComponent},
      {path:'users', component: UsersComponent}

    ]),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
