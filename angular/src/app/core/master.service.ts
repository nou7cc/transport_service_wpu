import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string ="";
  course: string ="";
  fee: string ="";
  currentStudentID = "";

  constructor(private http: HttpClient ) {}

  getAllUsers()
  { return this.http.get("http://localhost:3000/admin/users") }
}
//   register()
//   {
//    // this.isLogin = false; 
//    // alert("hi");
//     let bodyData = {
//       "stname" : this.stname,
//       "course" : this.course,
//       "fee" : this.fee,
//     };

//     this.http.post("http://localhost:9002/api/student/add",bodyData).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Employee Registered Successfully")
//         this.getAllStudent();
//       //  this.name = '';
//       //  this.address = '';
//       //  this.mobile  = 0;
//     });
//   }

//   setUpdate(data: any) 
//   {
//    this.stname = data.stname;
//    this.course = data.course;
//    this.fee = data.fee;
  

//    this.currentStudentID = data.id;
 
//   }

//   UpdateRecords()
//   {
//     let bodyData = 
//     {
//       "stname" : this.stname,
//       "course" : this.course,
//       "fee" : this.fee
//     };
    
//     this.http.put("http://localhost:3000/api/student/update"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Student Registered Updateddd")
//         this.getAllStudent();
      
//     });
//   }
 
//   save()
//   {
//     if(this.currentStudentID == '')
//     {
//         this.register();
//     }
//       else
//       {
//        this.UpdateRecords();
//       }       

//   }


//   setDelete(data: any)
//   {
//     this.http.delete("http://localhost:3000/api/student/delete"+ "/"+ data.id).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Student Deletedddd")
//         this.getAllStudent();
//     });
//   }
// }