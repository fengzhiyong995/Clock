import '../css/main.css';
class buJu{
    construtor(){

    }
    static liRotate(){
        let li = document.querySelectorAll('.clockUnder .clockScale li');
        let initDeg = 6;
        for(let y = 1;y<li.length;y++){
            li[y].style.setProperty('transform','rotate(' + initDeg + 'deg)');
            initDeg += 6;
        }
    }

}


buJu.liRotate();


var date = new Date();
var houer,
    minute,
    second;
houer = date.getHours();
minute = date.getMinutes();
second = date.getSeconds();
console.log(date,houer,minute,second);