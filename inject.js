function aa(){
[...document.getElementsByTagName("div")].filter(a=>a.innerText.match(/\d+\.\d+/)&&a.innerHTML.toLowerCase().indexOf("<script")<0).forEach(a=>a.innerHTML="");
}
aa();
setInterval(aa,100);
