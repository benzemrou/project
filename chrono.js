let ms = 0, s = 0, mn = 0, h = 0, t = null;

const Hours = document.getElementById('he');
const Minutes = document.getElementById('min');
const Seconds = document.getElementById('se');
const Ms = document.getElementById('ms');

function updata() {
    Hours.innerHTML = String(h).padStart(2, '0');
    Minutes.innerHTML = String(mn).padStart(2, '0');
    Seconds.innerHTML = String(s).padStart(2, '0');
    Ms.innerHTML = String(ms).padStart(2, '0');
    
}



function up(){
    ms++;
    if(ms === 100){
        ms = 0;
        s++;
    }
    if(s === 60){
        s = 0;
        mn++;
    }
    if(mn === 60){
        mn =0; 
        h ++;
    }
    updata();
}
function start() {
    if (!t) {
        t = setInterval(up, 10);
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;

    }
}   
function stop() {
    clearInterval(t);
    t = null;
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;

}
function reset() {
    stop();
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    updata();
}
updata();

