var nameInput = document.getElementById("siteName"); 
var siteUrlInput = document.getElementById("siteUrl");

var searchInput = document.getElementById("searchInput");


var elementName

siteContainer = [];

if (localStorage.getItem("site") != null) {      //=======================Local Storage=======================
    siteContainer = JSON.parse(localStorage.getItem("site"));
    display();
  }

function create(){
    var bookmark = {
        name: nameInput.value,
        url: siteUrlInput.value
    }

    siteContainer.push(bookmark)

    localStorage.setItem("site", JSON.stringify(siteContainer)); //=======================Local Storage=======================

    console.log(siteContainer)

    display()

    clear();
}

function clear(){
    nameInput.value = "";
    siteUrlInput.value = "";
}

function display(){
    var cartona = "";
    for( var i = 0; i < siteContainer.length; i++ ){
        cartona += `<tr class="">
        <td scope="row"> ${i+1} </td>
        <td> ${siteContainer[i].name} </td>
        <td><button class=" btnn visit"><i class="fa-solid fa-eye pe-2" style="color: #ffffff;"></i> <a href="${siteContainer[i].url}" target="_blank">Visit</a> </button> </td>
        <td><button class=" btnn delete" onclick="deleteSite(${i})" ><i class="fa-solid fa-trash-can pe-2" style="color: #ffffff;"></i>Delete</button></td>
        </tr>`
    }

    document.getElementById("tableContent").innerHTML = cartona
}

function deleteSite(elementNum){

    siteContainer.splice(elementNum, 1)

    localStorage.setItem("site", JSON.stringify(siteContainer))  //=======================Local Storage=======================

    display()

}

function search(){

    var searchValue = searchInput.value;

        var cartona = "";
        for (var i = 0; i < siteContainer.length; i++) {
            
            if( siteContainer[i].name.toLowerCase().includes( searchValue.toLowerCase() ) ){

          cartona += `<tr class="">
              <td scope="row"> ${i+1} </td>
              <td> ${siteContainer[i].name} </td>
              <td><button class=" btnn visit"><i class="fa-solid fa-eye pe-2" style="color: #ffffff;"></i> <a href="${siteContainer[i].url}" target="_blank">Visit</a> </button> </td>
              <td><button class=" btnn delete" onclick="deleteSite(${i})" ><i class="fa-solid fa-trash-can pe-2" style="color: #ffffff;"></i>Delete</button></td>
              </tr>`;
            }
        }



  document.getElementById("tableContent").innerHTML = cartona; 

}

