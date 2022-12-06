function aa(){
document.body.style="background:black !important;color:black !important;";
[...document.getElementsByTagName("div")].filter(a=>a.innerText.match(/\d+\.\d+/)&&a.innerHTML.toLowerCase().indexOf("<script")<0).forEach(a=>a.innerHTML="");
}
setInterval(aa,30);
aa();
