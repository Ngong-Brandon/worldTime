

document.getElementById("showMenu").addEventListener("click",()=>{
    document.getElementById("menu").style.width = "50%";

}
)
document.getElementById("close-nav").addEventListener("click",()=>{
    document.getElementById("menu").style.width = "0%";


})

const africa  = 
`algiers,
ndjamena,
sao_tome,
addis_ababa,
lagos,
douala,
luanda,
porto-novo,
gaborone,
ouagadougou,
bujumbura,
bangui,
kinshasa,
brazzaville,
abidjan,
djibouti,
cairo,
malabo,
johannesburg,
asmara,
mbabane,
libreville,
banjul,
accra,
conakry,
bissau,
nairobi,
maseru,
monrovia,
tripoli,
bamako,
nouakchott,
casablanca,
maputo,
windhoek,
niamey,
kigali,
dakar,
freetown,
mogadishu,
juba,
khartoum,
tunis,
kampala,
lusaka,
harare
`
    const AfricanCountries = africa.split(",");
function makeMatch(){
    let input = document.getElementById("search").value;

    if(input == ""){


        return [];

    }
    const reg = new RegExp(input);
      return AfricanCountries.filter((country)=>{
        if(country.match(reg)){
            return country;
        }

      })
      
    }



function showResult(){
    let pageResults = document.getElementById("regular");
    pageResults.innerHTML = ""
    let li="";
    let results = makeMatch();
    for(let iterator=0 ; iterator < results.length;iterator++){
        li += `<a class="a_class" style='text-decoration:none;color:black;text-transform:capitalize' id='${results[iterator]}' ><li onclick=choosed(this.textContent)  id='${results[iterator]}' style='text-transform:capitalize;'>${results[iterator]}</li></a>`;
        pageResults.innerHTML =  "<ul>" + li + "</ul>";
    }   

   
}


function choosed(currentValue){

    
    document.getElementById("search").value = currentValue;

makeMatch().forEach((counti)=>{
      let val =  document.getElementById("search").value;
      
        if(counti.match(val)){

        apiSearchResults(currentValue);
        
        }
        else{
            document.getElementById("alertBox").style.display = "block";
            makeAlert("Country not found... please try again");

        }
    
      }  );


 }
  

function loader(){ 

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("load").style.display = "flex";

})
window.addEventListener("load",()=>{
    document.getElementById("load").style.display = "none";


})
}

function displayImageTesti(){
    let imagePreview = document.getElementById("imagePreview");
    let imageInput =  document.getElementById("file");
    imageInput.addEventListener("change", (event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();


        reader.addEventListener("load", (eve)=>{
            imagePreview.src = eve.target.result;
             })
        reader.readAsDataURL(file);

    })
}


function getCommentAndDisplay(){

  
            document.getElementById("submit").addEventListener("click",()=>{
                document.getElementById("tell-expi").style.display = "none";
                const comment =  document.getElementById("comment").value;
                const image = document.getElementById("imagePreview").src;
                const name = document.getElementById("name").value
                    if(comment == "" && name == ""){

                        document.getElementById("error").innerText = "please make sure you've filled your name and comment";
                         document.getElementById("tell-expi").style.display = "block";

                    }

                 else{   let divMessage = `

                    <div class='mycomment'>
                    <nav>
                        <img src="${image}" width="50px" height="50px" alt="">
                    </nav>
                    <i>@worldclock</i>
            
                    <h3 style="position:relative;">${name}</h3>
                            ${comment}
                </div>

                    `

                    // commentSection.innerHTML += divMessage;
        localStorage.setItem("comment",divMessage);

            

        window.location.reload();
                }
            
})
        document.getElementById("comments").innerHTML += localStorage.getItem("comment");

}

function apiSearchResults(countryToBeSearch){
    document.getElementById("none").innerHTML = "";

    const newPage = `
    
    <header style="background-color:black;">
    <main class="nav-header">

        <nav class="show-menu" style="cursor:pointer;" id="showMenu">&#9776;</nav>
        <nav class="nav-item">
            <a onclick = "location.reload()" href="africa.html#ourservices">Home</a>
        </nav>
        <nav class="nav-item">
            <a onclick = "location.reload()" href="africa.html#country">Your Country</a>
        </nav>
       
        <nav class="nav-item">
            <a onclick = "location.reload()" href="africa.html#contact">Contact Us</a>
        </nav>
        <nav>
            <img src="logo.PNG" alt="Your broswer can't support this image">
        </nav>
</main>

<main class="alertBox" id="alertBox"><div class="alert" id="alerting"></div><div onclick="document.getElementById('alertBox').style.display = 'none' " class="ok">OK</div></main>

<main class="mobile-menu cursive" id="menu">
    <img src="Clock.png" style="height:20%;width:100%;" alt="">
    <span id="close-nav" class="close-nav">&#9003;</span>
    <br>
    <br>
    <nav>

        <i class="fa-solid fa-home"></i><a onclick = "location.reload()" href="africa.html">Home</a>

    </nav>

    <br>
    <nav>
        <i class="fa-solid fa-globe "></i><a onclick = "location.reload()" href="africa.html#country">Your Country</a>


    </nav>

    <br>

    <nav>
        <i class="fa-solid fa-phone"></i> <a onclick = "location.reload()" href="africa.html#contact">Contact Us</a>

    </nav>


</main>


    <main>
        <img src="https://th.bing.com/th/id/OIP.IGaJXKdX1GPXmUZeUAERegHaE7?pid=ImgDet&w=1280&h=853&rs=1" width="100%" height="500px" alt="">

        <div class="country-background">
            <center style="font-size:2rem !important;font-weight:bold;color:white; text-transform:capitalize;" id="searchCountry">${countryToBeSearch} City</center>
            <div class="current-time" id="currentTime">

            </div>
        </div>
    </main>
</header>
<br><br>
<center>
<button  id='update' onclick="apiResults(localStorage.getItem('ccount'))"  class="update" style="padding:1rem;border:0;border-radius:.7rem;" >Update Time</button>

</center>
<br><br>
<hr color="blueviolet" style="margin: 2rem;">
<main class="others">
    <div>
        <h2 class="cursive">Timezone</h2>
            <article style='margin:2rem;color:grey' id="searchTimezone">

            </article>
    </div>
        <div>
        <h2 class="cursive">Weather</h2>

      <article style='margin:2rem;color:grey' id="searchWeather">

      </article>

    </div>
    <div>
        <h2 class="cursive">Hemisphere</h2>

       <article style='margin:2rem;color:grey' id="searchHemisphere">

       </article>

    </div>

</main>


<footer>

    <main>
    <div>
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
    </div>
    <div>
      <a href="#"><i class="fa-brands fa-github"></i></a>

    </div>
    <div>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </div>
     </main>
     <center>
        <b>Build by Ngong Brandon  &copy; 2023 </b>

     </center>

</footer>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



    
    `



        document.getElementById("none").innerHTML = newPage;



        const country = document.getElementById("searchCountry");
        const time = document.getElementById("currentTime");
        const timeZone = document.getElementById("searchTimezone");
        const weather = document.getElementById("searchWeather");
        const Hemisphere = document.getElementById("searchHemisphere");



        document.getElementById("showMenu").addEventListener("click",()=>{
            document.getElementById("menu").style.width = "50%";
        
        }
        )
        document.getElementById("close-nav").addEventListener("click",()=>{
            document.getElementById("menu").style.width = "0%";
        
        
        })



        apiResults(countryToBeSearch);



}


function makeAlert(error){
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("alerting").innerHTML = error;
}


 async function apiResults(City){
   await  fetch(`https://worldtimeapi.org/api/timezone/Africa/${City}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        let am_pm = data.datetime.slice(11,13);
        console.log(am_pm);
        if(parseInt(am_pm) >= 12){
        document.getElementById("currentTime").innerHTML = data.datetime.slice(11,19)+"<span style='color:blueviolet' >PM</span>";
        }
        else{
        document.getElementById("currentTime").innerHTML = data.datetime.slice(11,19)+"<span style='color:blueviolet' >AM</span>";

        }
        document.getElementById("searchTimezone").innerHTML = data.timezone;

    }).catch((error)=>{

    console.log("there was an error which is:"+error);
            makeAlert("please reload the page and search Again")
    })

    localStorage.setItem("ccount",City);



updateDelay();

}







function updateDelay(){
        document.getElementById("update").style.display = "none";
    setTimeout(()=>{

        document.getElementById("update").style.display = "block";
        
    },10000);
}

function commentLimit(){

  let tesimos =   document.querySelectorAll(".testimo div");

  if(tesimos.length > 5){
    tesimos[0].style.display = "none";

  }


}
function getUserLocation(){

    if(navigator.geolocation){

        const navigate = navigator.geolocation;
        navigate.getCurrentPosition((pos)=>{

            let latitude = pos.coords.latitude;
            let longitude = pos.coords.longitude;

            console.log(latitude);
            console.log(longitude);

        });
    }
    else{
        console.log("geolocation is not supported");
    }
}


(function main(){

    loader();
    displayImageTesti();
    getCommentAndDisplay();
    commentLimit();
    getUserLocation();


})();



