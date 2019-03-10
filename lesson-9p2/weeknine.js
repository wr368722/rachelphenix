var townSection = document.querySelector("#first");

var requestURL = 'https://wr368722.github.io/rachelphenix/lesson-9p2/home.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var Home = request.response;
    townInfo(Home);
}

function townInfo(jsonObj) {
    var towns = jsonObj["towns"];

    for (var i = 0; i < towns.length; i++) {
        if (i === 0 | i === 2 | i === 3 | i === 6) {continue}
        var myArticle = document.querySelector('article');
        var name = document.querySelector('h2');
        var info1 = document.querySelector('.info1');
        var info2 = document.querySelector('.info2');
        var info3 = document.querySelector('.info3');
        var info4 = document.querySelector('.info4');

        name.textContent = towns[i].name;
        info1.textContent = towns[i].motto;
        info2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        info3.textContent = 'Current Population: ' + towns[i].currentPopulation;
        info4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + '"';

        myArticle.appendChild(name);
        myArticle.appendChild(info1);
        myArticle.appendChild(info2);
        myArticle.appendChild(info3);
        myArticle.appendChild(info4);

        townSection.appendChild(myArticle);

    }
}