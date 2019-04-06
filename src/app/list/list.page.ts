import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";


export interface data{
  key:String;
  payload:any;
}


@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  public dataLogs: Array<any> = [];
  public searchLogs: string = "";
  public datalogsearch: Array<any> = [];
  
  constructor(public fb: AngularFireDatabase) {

  }


  public onDel(key: string) {
    if (confirm("ยืนยันการลบข้อมูล")) {
      this.dataLogs = [];
      this.fb.object("/logs/" + key).remove();
      //this.fb.list("/logs").remove(key);
    }
  }

  ngOnInit() {
    this.fb
      .list("/logs")
      .snapshotChanges()
      .subscribe((value: any) => {
        this.dataLogs = [];
        value.forEach(element => {
          this.dataLogs.push({
            key: element.key,
            payload: element.payload.val()
          });
        });
        this.onsearch("");
      });
  }

  public onsearch(text: string) {
    let txt = new RegExp(this.searchLogs, "gi");
    this.datalogsearch = text.length > 0 ? this.dataLogs.filter((c: any) =>
      c.payload.time.search(txt) != -1 ||
      c.payload.Humididy.toString().search(txt) != -1 ||
      c.payload.Temperature.toString().search(txt) != -1
    )
      : this.dataLogs;

  }

  public convertjson(data:data){
  return JSON.stringify(data);
  }



}

/*
   this.fb
      .list("/logs")
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
      });
*/
