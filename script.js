
var mm=1;
function Time(){
    const time=new Date();
    const h=time.getHours();
    const m=time.getMinutes();
    const s=time.getSeconds();
    document.getElementById('hour').innerHTML=h;
    document.getElementById('minut').innerHTML=m;
    document.getElementById('sec').innerHTML=s;

    const d=time.getDate();
    document.getElementById('dd').innerHTML=d;
             mm=time.getMonth();
             mm++;
    document.getElementById('mm').innerHTML=mm;
    const yy=time.getFullYear();
    document.getElementById('yy').innerHTML=yy;

    const days=["Sunday","Monday","Tuesday","Wednesday","Tuesday","Friday","Saturday"];
    const da=time.getDay();
    document.getElementById('ddd').innerHTML=days[da];

    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    mm=time.getMonth();
    document.getElementById('mn').innerHTML=months[mm];
}
    setInterval(Time,1000);

