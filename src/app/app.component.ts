import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(){
  //   this.getDate();
  // }
  title = 'myfristapp';
  sal: any = 12000;//this is interpolation
  str: any = " ";
  fullName: string = "this angular two way data";   //two data binging

  number: any = " ";
  mycls = "test border"; //this is a class buinding
  myclss="testl border1"

  interpolation: any = "this is an interpolationgsfdfgdfgdfgdfgfd"; // this  interpolation 

  url: any = "https://images4.alphacoders.com/975/thumbbig-975294.webp";  // this  interpolation 

 

  show() 
  {

    return this.interpolation + '-' + this.sal; // this  interpolation 
  }

  // --------------------------------------------------------------------------------------
  propertybinding: any = "this is propety binding"; // this is peoperty binding

  img: any = "https://images4.alphacoders.com/975/thumbbig-975294.webp";  // this is peoperty binding
  btn: any = "paytem button";// attribute binding
  // -----------------------------------------------------------------------------------------------
  //  enent binding

 
 str1:any = " "
  handleEvent(event: any)
   {
    // if(event.key!="Enter"){
    //   return;
    // }
    let val = event.target.value;
    this.str1= val;
  }


  handle(event: any) 
  {
  let val1 = event.target.value;
    console.log(val1);
  }


// -----------------------------------------------------------------
  //--------------------- practicrs---------------------------
  text: any = " ";
  textsize: any = 10;

  settextsize(event: any) 
  {
    let val = event.target.value;
    this.text = val;
  }

  setSize(opreation: any) {

    if (opreation === 'inc') {
      this.textsize += 1;
    }
    else {
      this.textsize -= 1;
    }

  }

  // ---------------------------------------------------------------------------------
 sdfds :any=""
  getinfo(my:any)
  {

     let val1=my;

     this.sdfds=val1;


   
     
  }

  // ---------------------------------------------------------------------------------

  pipe:any="this is an angulr pipe";

  date:any=  new Date()
  amount:any= 100;
  // ----------------------------------------------
  selectskill:any="";
  changeEvent(option: any)
  {
     const val = option.target.value;
     this.selectskill=val;
  }

  // ----------------------------------------------
   data123 :any = "";
   isdataArrive= false;

   constructor(){
     this.getDate();
   }


   getDate()
   {
     setTimeout(() => {
       this.data123 =' from server';
       this.isdataArrive =true;
        

     }, 3000);
   }

 names:any=["johnny","nani","sai","shaik"];

 users:any =[
   {
     "name":"johny",
     "skill":"javascript",
     "email":"skjohnny@gamil.com",
     "website":"www.google.com"
     

   },
   {
    "name":"shaik",
    "skill":"html&css",
    "email":"shaik@gamil.com",
    "website":"www.facebook.com"

  },
  {
    "name":"teja",
    "skill":"angular",
    "email":"teja@gamil.com",
    "website":"www.yahoo.com"

  },

 ]





}
