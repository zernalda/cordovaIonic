import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';
import { constructor } from 'Firebase';

// infos = [];
// ref = firebase.database().ref('infos/');

// constructor(public router: Router, public loadingController: LoadingController) {
//   this.ref.on('value', (resp: any) => {
//     this.infos = [];
//     this.infos = snapshotToArray(resp);
//   });
// }

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage { }
