import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';
//import { format } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  postUser(userForm: NgForm) {
    if (userForm.value.id) {
      this.firebaseService.updateData(userForm.value).subscribe(resData =>{
        console.log(resData);
        this.firebaseService.getData();
        userForm.reset();
        this.router.navigateByUrl('/users');
      }, err => {
        console.log(err);
      } )
    } else {
      this.firebaseService.postData(userForm.value).subscribe(data => {
        console.log(data);
        this.firebaseService.getData();
        userForm.reset();
        this.router.navigateByUrl('/users');
      }, err => {
        console.log(err);
      });
    }
  }

  ngOnInit() {
  }

}
