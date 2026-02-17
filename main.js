const REDIRECT_URL = "http://p8r9.com/?utm_campaign=D65m7f7e4i&v1=[v1]&v2=[v2]&v3=[v3]"; // change
const DURATION = 5;
const SESSION_KEY = "mobile_sheet_seen";

const countdown = document.getElementById("countdown");

// Show once per session
if (sessionStorage.getItem(SESSION_KEY)) {
  window.location.href = REDIRECT_URL;
}

document.getElementById("verifyBtn").onclick = go;
document.getElementById("enterBtn").onclick = go;

let t = DURATION;
countdown.textContent = t;

const timer = setInterval(()=>{
  t--;
  countdown.textContent = t;
  if(t <= 0){
    clearInterval(timer);
    go();
  }
},1000);

let done=false;
function go(){
  if(done) return;
  done=true;
  sessionStorage.setItem(SESSION_KEY,"1");
  window.location.href = REDIRECT_URL;
}
