//step-1:create an XHR object
//request has to be used in whole program
var request=new XMLHttpRequest();

//step-2:create a connection
//true:optional,
//request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
request.open('GET','https://restcountries.com/v2/all',true);


//step-3:send request
//push for the API to send request to server
request.send();

//step-4:once data successfully received from server
//http:200
request.onload=function(){
    //conversion from string to array of json objetcs..
    var data=JSON.parse(request.response);
    //console.log(data);

   //for(var i=0;i<data.length;i++){
    
   //console.log(data[i].id,data[i].name,data[i].email);
    
   
    var res=data.filter((ele)=>ele.population<100000);
    console.log(res);
    
   }
  
