import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(public fb: AngularFireDatabase) {
  
  }

  ngOnInit() {
    this.fb
      .object("/DHT")
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
      });
    
  }
}

/*
 this.fb.object("/DHT").valueChanges().toPromise().then((value:any)=>{
    console.log(value);
 
    });
    -----------------------------------------------------------------------------
      this.fb.list("/logs").push({
      Temperature: Math.random(),
      Humididy: Math.random(),
      time:`${new Date().getDay()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
    });
*/
