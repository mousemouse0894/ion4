import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listupdate',
  templateUrl: './listupdate.page.html',
  styleUrls: ['./listupdate.page.scss'],
})
export class ListupdatePage implements OnInit {
  public formUpdateList : FormGroup;
  constructor(private route: ActivatedRoute, private formBuild: FormBuilder,public fb: AngularFireDatabase,private router:Router) { }

  ngOnInit() {
    let dataRoute = JSON.parse( this.route.snapshot.paramMap.get('data'));
    //console.log(JSON.parse(dataRoute));
    this.formUpdateList = this.formBuild.group({
      key:[dataRoute.key,Validators.required],
      Temperature:[dataRoute.payload.Temperature,Validators.required],
      Humididy:[dataRoute.payload.Humididy,Validators.required],
      time:[dataRoute.payload.time,Validators.required]
   })
   
  }
  public onupdate(){
    let keyUpdate = this.formUpdateList.value.key;
   
    if(confirm("ยืนยันการเเก้ไข")){
      delete this.formUpdateList.value.key;
      this.fb.object("/logs/"+keyUpdate).update(this.formUpdateList.value).then((value:any)=>{
        //Arrow function
        this.router.navigate(["/list"]);
      }).catch((reson:any)=>{
        console.log(reson);
      })
    //console.log(this.formUpdateList.value)
    }
  }

}
