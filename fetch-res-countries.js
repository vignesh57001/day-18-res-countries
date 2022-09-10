var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json())
.then((value)=>bar(value));


function bar(value){
    
for(var i=0;i<value.length;i++){
    console.log(value[i]);

      var div=document.createElement("div");
      div.setAttribute("class","col-md-4")
      div.style.color="black";
      div.innerHTML= ` <div class="card"  style="height:550px">
      <h2 class="card-header">${value[i].name.common}</h2>
     
      <img src="${value[i].flags.svg}" class="card-img-top" alt="..." style="height:200px">
      <div class="card-body">
      
        <h5 class="card-title  ">Capital : ${value[i].capital}</h5>
        <h5 class="card-title ">Region : ${value[i].region}</h5>
        <h5 class="card-title  ">Country Code : ${value[i].cca3}</h5>
        <h5 class="card-title  ">LatLng : ${value[i].latlng}</h5>
        <a href="https://api.openweathermap.org/data/2.5/weather?lat=${value[i].latlng[0]}&lon=${value[i].latlng[1]}&appid=303a024b22cc8a748bcd281cdfcb25ab" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Check Weather</a>

      </div>
      </div>
    </div>`
    document.getElementById("tc").append(div);

};
};

    
    

