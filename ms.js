
var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName("tab-contents");
console.log(tabcontents);
console.log(tablinks);
function opentab(tabname)
{

    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    const newid = document.getElementById(tabname);
    const linepink = document.querySelector("."+tabname);
    newid.classList.add("active-tab");
    linepink.classList.add("active-link");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu()
{
    sidemenu.style.right="0";
}
function closemenu()
{
    sidemenu.style.right="-200px";
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwRvFDHVhWmOfRDLJcmfWBNUdf5n__dlcstaKFBlu_O_4MCM-mXnx0TG8KDiFjKgYPvQg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(() => {
            msg.innerHTML=""
        }, 1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  
 