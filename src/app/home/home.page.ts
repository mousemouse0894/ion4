import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { MyserviceService } from '../services/myservice.service';

export interface Screen{
  height:Number;
  width:Number;

}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit,OnDestroy {
  public thresholdConfig = {
    '0': { color: 'green' },
    '40': { color: 'orange' },
    '75.5': { color: 'red' }
  };
  public intervalReadScreen: any = null;
  public DHT: any = null;
  public screenDisplay:Screen = {
    height: 0,
    width:0
  };
  public swtu: boolean = false;
  constructor(public fb: AngularFireDatabase,public se: MyserviceService) {
 

  }


  ngOnInit() {
    this.fb
      .object("/DHT")
      .valueChanges()
      .subscribe((value: any) => {
        this.DHT = value;
        // console.log(value);
      });
      
    this.fb
      .object("/sw_1")
      .valueChanges()
      .subscribe((value: boolean) => {
        this.swtu = value;
        // console.log(value);
      });

      this.intervalReadScreen=setInterval(() => {
        this.screenDisplay = {
          height: screen.availWidth / 40,
          width: screen.availWidth / 2.5
        }
        //console.log(this.screenDisplay) ;
      }, 100);
  
  }

 ngOnDestroy(){
  clearInterval(this.intervalReadScreen);

 }
  public sw_onchange() {
   // console.log(this.swtu);
    this.fb.object("/sw_1").set(this.swtu);
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
