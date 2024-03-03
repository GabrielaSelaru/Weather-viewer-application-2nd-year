let weather = {
    apiKey:"c0fab2981af2092bb0de466f773c3e63",

    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=metric&appid=" +this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
        removeElements();
    },

    displayWeather: function(data){
        const { name } = data.city;
        document.querySelector("#cityName1").innerText = "Weather in " + name;

        //1
        let { icon} = data.list[0].weather[0];
        let { temp_min,temp_max } = data.list[0].main;

        document.querySelector("#img1").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#day1min").innerText = "Min temperature: " + temp_min + "°C";
        document.querySelector("#day1max").innerText = "Max temperature: " + temp_max + "°C";

        //2
        // { icon} = data.list[1].weather[0];
        //{ temp_min,temp_max } = data.list[1].main;

        document.querySelector("#img2").src ="https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
        document.querySelector("#day2min").innerText = "Min temperature: " + data.list[1].main.temp_min + "°C";
        document.querySelector("#day2max").innerText = "Max temperature: " + data.list[1].main.temp_max + "°C";

        //3
        // { icon} = data.list[2].weather[0];
        // { temp_min,temp_max } = data.list[2].main;

        document.querySelector("#img3").src ="https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
        document.querySelector("#day3min").innerText = "Min temperature: " + data.list[2].main.temp_min + "°C";
        document.querySelector("#day3max").innerText = "Max temperature: " + data.list[2].main.temp_max + "°C";

        //4
        // { icon} = data.list[3].weather[0];
        // { temp_min,temp_max } = data.list[3].main;

        document.querySelector("#img4").src ="https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
        document.querySelector("#day4min").innerText = "Min temperature: " + data.list[3].main.temp_min + "°C";
        document.querySelector("#day4max").innerText = "Max temperature: " + data.list[3].main.temp_max + "°C";

        //5
        // { icon} = data.list[4].weather[0];
        // { temp_min,temp_max } = data.list[4].main;

        document.querySelector("#img5").src ="https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
        document.querySelector("#day5min").innerText = "Min temperature: " + data.list[4].main.temp_min + "°C";
        document.querySelector("#day5max").innerText = "Max temperature: " + data.list[4].main.temp_max + "°C";


        document.querySelector(".weather").classList.remove("loading");
        

        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").
addEventListener("click",function() {
    weather.search();
});

let names =[
"Abu Dhabi",
"Abuja",
"Accra",
"Addis Ababa",
"Algiers",
"Amman",
"Amsterdam",
"Andorra la Vella",
"Ankara",
"Antananarivo",
"Apia",
"Ashgabat",
"Asmara",
"Asuncion",
"Athens",
"Baghdad",
"Baku",
"Bamako",
"Bandar Seri Begawan",
"Bangkok",
"Bangui",
"Banjul",
"Basseterre",
"Beijing",
"Beirut",
"Belfast",
"Belgrade",
"Belmopan",
"Berlin",
"Bern",
"Bishkek",
"Bissau",
"Bogota",
"Brasilia",
"Bratislava",
"Brazzaville"	,
"Bridgetown",
"Brussels",
"Bucharest",
"Budapest",
"Buenos Aires",
"Cairo",
"Canberra",
"Caracas",
"Cardiff",
"Castries",
"Chisinau",
"Conakry",
"Copenhagen",
"Dakar",
"Damascus",
"Dhaka",
"Dili",
"Djibouti",
"Dodoma",
"Doha",
"Dublin",
"Dushanbe",
"Edinburgh",
"Freetown",
"Funafuti",
"Gaborone",
"Georgetown",
"Gitega",
"Guatemala City",
"Hanoi",
"Harare",
"Havana",
"Helsinki",
"Honiara",
"Islamabad",
"Jakarta",
"Jerusalem",
"Juba",
"Kabul",
"Kampala",
"Kathmandu",
"Khartoum",
"Kigali",
"Kingston",
"Kingstown",
"Kinshasa",
"Kuala Lumpur",
"Kuwait City",
"Kyiv",
"Sucre" ,
"Libreville",
"Lilongwe",
"Lima",
"Lisbon",
"Ljubljana",
"Lome",
"London",
"Luanda",
"Lusaka"	,
"Luxembourg",
"Madrid",
"Majuro"	,
"Malabo"	,
"Male"	,
"Managua",
"Manama"	,
"Manila"	,
"Maputo"	,
"Maseru"	,
"Mbabana",
"Melekeok",
"Mexico City"	,
"Minsk",
"Mogadishu",
"Monaco"	,
"Monrovia",
"Montevideo"	,
"Moroni",
"Moscow",
"Muscat",
"N Djamena",
"Nairobi",
"Nassau",
"Nay Pyi Taw",
"New Delhi",
"Niamey",
"Nicosia",
"Nouakchott",
"Nur-Sultan",
"Oslo",
"Ottawa",
"Ouagadougou"	,
"Palikir",
"Panama City",
"Paramaribo",
"Paris",
"Phnom Penh",
"Podgorica",
"Port au Prince",
"Port Louis"	,
"Port Moresby",
"Port of Spain",
"Port Vila",
"Porto Novo",
"Prague"	,
"Praia"	,
"Pretoria",
"Pyongyang"	,
"Quito",
"Rabat",
"Reykjavik",
"Riga",
"Riyadh"	,
"Rome",
"Roseau"	,
"Saint George",
"Saint John",
"San Jose",
"San Marino",
"San Salvador",
"Sana",
"Santiago",
"Santo Domingo",
"Sao Tome",
"Sarajevo",
"Seoul",
"Singapore",
"Skopje",
"Sofia",
"Sri Jayawardenapura Kotte",
"Stockholm",
"Suva"	,
"Taipei",
"Tallinn",
"Tarawa Atoll",
"Tashkent",
"Tbilisi",
"Tegucigalpa"	,
"Tehran"	,
"Thimphu",
"Tirana" ,
"Tokyo",
"Tripoli"	,
"Tunis"	,
"Ulaanbaatar",
"Vaduz"	,
"Valletta",
"Vatican City",
"Vienna",
"Vientiane",
"Vilnius"	,
"Warsaw"	,
"Washington D.C.",
"Wellington",
"Windhoek"	,
"Yamoussoukro",
"Yaounde"	,
"Yerevan",
"Zagreb"
]

let sortedNames=names.sort();

let input=document.getElementById("cityInput");

input.addEventListener("keyup",(e)=>{
    removeElements();
    for(let i of sortedNames){
        if(i.toLowerCase().startsWith(input.value.toLowerCase())&&
        input.value!=""){
            let listItem=document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor="pointer";
            listItem.setAttribute("onclick","displayNames('" + i + "')");
            listItem.innerHTML=i;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});
function displayNames(value){
    input.value=value;
    removeElements();
}

function removeElements(){
    let itemss=document.querySelectorAll(".list-items");
    itemss.forEach((item)=>{
        item.remove();
    });
}

