import { Component, OnInit } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  ngOnInit() {

    this.delayedMessage("World", 400).then(()=>{ console.log('done') })
    this.delayedMessage("Hello", 200)
    
}
    sleep(duration: any) {
        return new Promise(function(resolve, reject) {
            setTimeout(()=> { resolve(0) }, duration);
      })
    }

    async delayedMessage(message: any, delay: any) {
      let remainingTime = await this.sleep(delay)
      console.log(message, `(remaining time: ${remainingTime})`)
    }
}