import { HttpClient ,HttpParams} from "@angular/common/http";
import { Component,OnInit } from "@angular/core";
import { City, ForeCastWT, List } from "../interface/FCwt";
@Component({
  selector:"fc-wt",
  templateUrl:"./wt.html",
  styleUrls:["./fcwt.css"]
})
export class FCWT{
  array:List[]|undefined;
  city:string="paris";
  location:City|undefined;
  enter(event:KeyboardEventInit){
    if(event.key=="Enter"){
      this.onSubmit();
    }
  }
  constructor(private http:HttpClient){
    this.onSubmit();
  }
  onSubmit(){
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    let params = new HttpParams();
    params =  params.append('q',this.city);
    params =  params.append('appid','09a71427c59d38d6a34f89b47d75975c');
    params =  params.append('units','metric');
    params =  params.append('lang','vi');
    this.http.get<ForeCastWT>(url,{params: params})
      .subscribe(value=>{
        this.array = value.list;
        this.location=value.city;
      });
  }
}

/*
myFunction(){
  var Sbar = document.getElementById("searchbar");

  console.log(Sbar?.offsetTop)
  if(window.scrollY>=303){
    console.log(window.scrollY);
    Sbar?.classList.add("sticky");
  }else{
    Sbar?.classList.remove("sticky");
  }
}*/


 // var Sbar = document.getElementById("searchbar");
    // var sticky = Sbar?.offsetTop;
    // console.log(window.scrollY)
    // this.myFunction() {
    //     if (window.scrollY >= 400) {
    //         Sbar?.classList.add("sticky");
    //         console.log(window.scrollY)
    //     } else {
    //         Sbar?.classList.remove("sticky");
    //     }
    // }
