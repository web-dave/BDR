import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'hannes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bdr!!!!!';
  foo = '';
  constructor(update: SwUpdate, push: SwPush) {
    update.available.subscribe(u => {
      console.log(u);
      if (confirm('UPDATE!?')) {
        location.reload();
      }
    });
    push
      .requestSubscription({
        serverPublicKey:
          'BKhvsY9s0FtnypI57GdBW0oWngy0k9CcRCJ8xhD4hIgp29Dku3cs6_4WVie95v2BPVw_4UMxqbJVP2ZefTmlOOQ'
      })
      .then(subscription => console.log(subscription.toJSON()));

    push.messages.subscribe(m => console.log(m));
  }
}
