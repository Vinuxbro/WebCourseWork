function ChangeBcolor(){
    var ColorOption= document.getElementById("BgbColor")[document.getElementById("BgbColor").selectedIndex].value;
    if (ColorOption==="#34495E"){
        document.body.style.backgroundColor="#34495E";
    }
    else if(ColorOption==="#7bc043"){
        document.body.style.backgroundColor="#7bc043";
    }
    else if(ColorOption==="#be9b7b"){
        document.body.style.backgroundColor="#be9b7b";
    }
    else if(ColorOption==="#afafaf"){
        document.body.style.backgroundColor="#afafaf";
    }
    else if(ColorOption==="#ffaaa5"){
        document.body.style.backgroundColor="#ffaaa5";
    }
    else if(ColorOption==="#f37735"){
        document.body.style.backgroundColor="#f37735";
    }
    else if(ColorOption==="#8dbdff"){
        document.body.style.backgroundColor="#8dbdff";
    }
    else if(ColorOption==="#fdfbfb"){
        document.body.style.backgroundColor="#fdfbfb";
    }
}

function ChangeTxColor(){
    var ColorOption= document.getElementById("FontColor")[document.getElementById("FontColor").selectedIndex].value;
    if (ColorOption==="#000000"){
        document.body.style.color="#000000";
    }

    else if(ColorOption==="#ffffff"){
        document.body.style.color="#ffffff";
    }
    else if(ColorOption==="#ee4035"){
        document.body.style.color="#ee4035";
    }
    else if(ColorOption==="#24de21"){
        document.body.style.color="#24de21";
    }
    else if(ColorOption==="#188cd9"){
        document.body.style.color="#188cd9";
    }
    else if(ColorOption==="#4f372d"){
        document.body.style.color="#4f372d";
    }
    else if(ColorOption==="#2e003e"){
        document.body.style.color="#2e003e";
    }
    else if(ColorOption==="#f37735"){
        document.body.style.color="#f37735";
    }
}

//Display discrption and image for Sigiriya
function Display1(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Sigiriya</h2><p>Sigiriya is an ancient rock fortress and palace built by King Kashyapa during the reign of 473 – 495 which is standing majestically 660 feet straight up. It is located in the northern Matale district near the town of Dambulla in central province of Sri Lanka. The word Sigiriya or the Sinhagiri means the Lion’s Rock where you have to climb up 1200 steps before you reach the Lion Rock Fortress on top of Sigiriya. There are several platforms that break up the steps and allow for a little break if you need it. Today Sigiriya rock fortress is one of the most famous Archeological Treasure and UNESCO named Sigiriya rock as a World Heritage in 1982 under the name “Ancient City of Sigiriya Sri Lanka”. </p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Ella
function Display2(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Ella</h2><p>Ella is a small village in the highlands of Sri Lanka which is filled with tea estates, mountains, waterfalls and of course with some good air to breath.Lots of people make Ella as one of their must visit destination just to witness the breathtaking views it creates. It is a dream place for many trekkers with some of the best hikes the Island provides. This hidden village got vastly popular among the tourists lately.Views of mist and clouds covering the summits of the mountain range and the morning sun rise in Ella are spectacular scenes to witness and captured. After a fresh hike in the morning, hit a waterfall, grab some tasty Sri Lankan foods from somewhere with a beer, rest for a while and go for a railwalk to famous Nine Arch Bridge in the evening, you would sure love the all experience. </p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Yala
function Display3(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Yala</h2><p>It’s home to Panthera pardus kotiya, a majestic leopard endemic to Sri Lanka. But among the glorious spectacle of wildlife, you’d also witness the tell-tale signs of a lost civilization. The Monastic settlement of Sithulpawwa, an important pilgrim site, is said to have housed 12,000 inhabitants seeking solace, some 2000 years ago. The restored rock Temple, among a series of well-preserved ancient temples offers a glimpse into a glittering past. What is today a pristine wildlife kingdom, Yala was home to a thriving civilization, dating back to the glory days of Sri Lankan Kings. Hundreds of tanks, most in dilapidated state today, are testimony to an agri-based civilization. The large, thriving tanks now provide a lifeline to the animal kingdom, especially during dry season.</p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Kandy
function Display4(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Kandy</h2><p>The last Sinhalese kingdom, Kandy is central to the history of Sri Lanka and is home to many of the island’s cultural gems. Meaning ‘hill’, Kandy once stood as an impenetrable fortress against invading colonial powers, withstanding all attempts of invasion until the British finally deposed the king in 1815. Kandy houses the world-famous Temple of the Tooth, one of the most famous Buddhist temples in the world, which was built to protect the sacred tooth relic thought to belong to Lord Buddha, which has been enshrined in Sri Lanka for hundreds of years. As well as a host of other temples, visitors to the city can wander along Kandy Lake, stroll through the stunning Botanical Gardens – created by the British in the 19th century and still one of the most beautiful gardens in Asia – and visit Kadungannawa Tea Factory. Kandy is one of the best places to explore the art history of Sri Lanka and travelers should take the time to see a Kandyan cultural show.</p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Pollonnaruwa
function Display5(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Polonnaruwa</h2><p>Polonnaruwa is the Island's 2nd largest kingdom. Today the ancient city of Polonnaruwa remains one of the best planned Archeological relic sites in the country, standing testimony to the discipline and greatness of the Kingdom's first rulers. Its beauty and serenity was captured in the Duran Duran music video Save a Prayer in 1982. The ancient city of Polonnaruwa has been declared a World Heritage site by UNESCO. The Lankathilaka temple and a colossal statue of the Buddha made from stone is located here.</p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Udawalawa
function Display6(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Udawalawa</h2><p>Udawalawe National Park lies on the boundary of Sabaragamuwa and Uva Provinces, in Sri Lanka. The national park was created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir on the Walawe River, as well as to protect the catchment of the reservoir.Udawalawe lies on the boundary of Sri Lanka's wet and dry zones. Plains dominate the topography, though there are also some mountainous areas.The Kalthota Range and Diyawini Falls are in the north of the park and the outcrops of Bambaragala and Reminikotha lie within it.</p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Hikkaduwa
function Display7(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Hikkaduwa</h2><p>These water sports include snorkeling and scuba diving for the adventure seekers. The clear waters beckon the nature lovers who wish to take a dip inside the waters to witness the vibrant, colorful aquatic life. The coral sanctuary hosts gorgeous coral formations, which house a variety of fishes and large turtles. The islets along the beach breed pockets of wildlife and are a wonderful way to interact with it.Hikkaduwa is famous for serving delicious seafood curries, relaxing massages, Buddhist temples, and watersports such as surfing, snorkeling, and diving. The beaches in Hikkaduwa may not be at par with Bali or Goa, but it does attract a fair amount of regulars.</p>";
    document.getElementById("Content").appendChild(Location);
}

//Display discrption and image for Badulla
function Display8(imgs){
    var displayImage = document.getElementById("ShowImage");
    displayImage.src = imgs.src;
    displayImage.parentElement.style.display='block';
    var Location = document.createElement("div");
    Location.id="PlaceName";
    Location.innerHTML="<h2>Badulla</h2><p>Badulla is located in the southeast of Kandy, almost encircled by the Badulu Oya River, about 680 m (2,230 ft) above sea level and is surrounded by tea plantations. The city is overshadowed by the Namunukula range of mountains (highest peak 2,016 m (6,614 ft) above sea level). It was a base of a pre-colonial Sinhalese local prince (regional king) who ruled the area under the main King in Kandy before it became part of the British Empire. Later, it became one of the provincial administrative hubs of the British rulers. The city was the terminus of upcountry railway line built by the British in order to take mainly tea plantation products to Colombo.</p>";
    document.getElementById("Content").appendChild(Location);
}

function remove(){
    document.getElementById("Content").innerHTML="";
}
