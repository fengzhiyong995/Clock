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
class clockGn{
    constructor(){

    }
    getTime(d){
        let time = [];
        time.push(d.getHours(),d.getMinutes(),d.getSeconds());
        return time;
    }
    houerDeg(d){
        let time = this.getTime(d);
        let houer = time[0];
        let minute = time[1];
        let add = 0;
        add = Number(~~(minute / 2));
        let deg = [0,30,60,90,120,150,180,210,240,270,300,330,360,30,60,90,120,150,180,210,240,270,300,330,360];
        deg[houer] = initDeg + deg[houer] + add;
        return deg[houer];
    }
    minuteDegAndsecondDeg(d){
        let time = this.getTime(d);
        let minute = time[1];
        let second = time[2];
        let deg = [];
        deg.push(initDeg + minute*6,initDeg + second*6);
        return deg;
    }
    secondDeg(){

    }
    alarmDeg(d){
        clockAlarm.style.setProperty('transform','rotate(' + this.houerDeg(date) + 'deg)');
    }
    alarm(){
        let a = getComputedStyle(clockAlarm,null).transform;
        let b = getComputedStyle(clockHouer,null).transform;
        a === b?window.close():'';
    }
    setDeg(){
        clockHouer.style.setProperty('transform','rotate(' + this.houerDeg(date) + 'deg)');
        clockMinute.style.setProperty('transform','rotate(' + this.minuteDegAndsecondDeg(date)[0] + 'deg)');
        clockSecond.style.setProperty('transform','rotate(' + this.minuteDegAndsecondDeg(date)[1] + 'deg)');
    }
}

buJu.liRotate();


var date = new Date();
var gN = new clockGn();
var initDeg = -90;
var clockHouer = document.querySelector('.clockUnder .clockHouer');
var clockMinute = document.querySelector('.clockUnder .clockMinute');
var clockSecond = document.querySelector('.clockUnder .clockSecond');
var clockAlarm = document.querySelector('.clockUnder .clockAlarm');
var alarm = document.querySelector('.alarm');
gN.setDeg();
var timer;
timer = setInterval(() => {
    date = new Date();
    gN.setDeg();
    gN.alarm();
}, 1000);
alarm.addEventListener('click',function(e){
    let ele = e.target.className;
    switch(ele){
        case 'yes': 
            let val = document.querySelector('.alarm .text');
            let reg = /^(?:(?:0?[\d]{1})||(?:1{1}[\d]{1})||(?:2{1}[0-4]{1})):(?:(?:[0-5]*[\d]{1})||(?:60))$/g;
            let ss;
            let d = reg.exec(val.value);
            d !== null?(ss = d[0].split(':'),
                    date.setHours(ss[0],ss[1]),
                    gN.alarmDeg(date)):alert('你要设置成“小时:分钟”');
            break;
        case 'no' : 
            let text = document.querySelector('.alarm .text');
            text.value = '';
            break;
        default: ;
    }
},false)
