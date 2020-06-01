// Personal API Key for OpenWeatherMap API
const key = '&appid=6f0ef5425e21b5899eb0cec09c1d4051&units=imperial';
//const key="6f0ef5425e21b5899eb0cec09c1d4051";
const url= `https://api.openweathermap.org/data/2.5/weather?zip=`;
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click",  performAction);
/* Function called by event listener */
function performAction(){
  const feelings=document.getElementById("feelings");
  const zip=document.getElementById("zip").value;
  const d= new Date();
   getData(url,zip, key)
  .then(function(data){
   postData('/all', {temp: data.main.temp, date: d, user_response: feelings.value})
   updateDomElement();
   });
   
}
/* Function to GET Web API Data*/
const getData= async(url, zip, key)=>{
const res= await fetch(url+zip+",us"+key)
.then(res => res.json())
try{
  console.log(res);
  return res;
}catch(error){
  console.log("error", error);
}
};

/* Function to POST data */
const postData= async(url='', data={})=>{
  const res= await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(res => res.json());
   try{
    console.log(res);
    return res;
   }catch(error){
    console.log("error", error);
  }
} 
/* Function to GET Project Data */
const updateDomElement= async()=>{
  const req= await fetch('/all')
  .then(req => req.json())
  try{
    document.getElementById('date').innerHTML=req.date;
    document.getElementById('temp').innerHTML=req.temp;
    document.getElementById('content').innerHTML=req.user_response;
    
  }catch(error){
    console.log("error", error);
  }

}
