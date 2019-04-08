import { Injectable } from '@angular/core';

declare let Microgear: any;

@Injectable({
  providedIn: 'root'
})
export class MicrogearService {

  constructor() { }

  public microgear(){
    var microgear = Microgear.create({
      key: "zsekYN2tgZWBjEE",
      secret: "z4ymnOwZtBeDRGzMyVrjc5RGr",
      alias : "Myapp"
    });

    microgear.connect("ion4");
    return microgear;
  }
}
