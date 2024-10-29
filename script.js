let box =document.querySelector(".box")

let requst= new XMLHttpRequest();

let randomNum = Math.ceil(Math.random()*1000)

console.log(requst)

let array = []

requst.onload = (()=>{

    console.log(JSON.parse(requst.responseText));

    if(requst.readyState == 4 && requst.status == 200){
        let data = JSON.parse(requst.responseText)
          box.innerHTML += `
                <q class = "mytext" >  ${data.quote} </q>
                <p> ' ${data.author} ' </p> <span onclick = "copy()"><i class="fa-solid fa-copy"></i></span>

            `;
        
    }
})


requst.open("GET", `https://dummyjson.com/quotes/${randomNum}`);
requst.send()

function copy() {
  // Get the text field
  let copyText = document.querySelector(".mytext");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  // Alert the copied text
  alert("Copied the text: " + copyText.textContent);
}