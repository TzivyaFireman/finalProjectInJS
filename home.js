
//טיימר
const popUp=document.getElementById("popUp");
popUp.style.display="none";

const showPopUp =()=>{
    popUp.style.display="block";
};
setTimeout(showPopUp,10000);


const rollPopUp =()=>{
    popUp.style.display="none";
     setTimeout(showPopUp,10000);

}
document.addEventListener("scroll",()=>{
    rollPopUp();
});




// //חיפוש
// const searchProducts = (searchTerm) => {
//     searchTerm = searchTerm.toLowerCase();
  
//     // Clear previous search results
//     document.getElementById("searchResults").innerHTML = "";
  
//     // Make an AJAX request to fetch the JSON data
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "./hh.json", true);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
  
        
//         processJSONData(data, searchTerm);
//       }
//     };
//     xhr.send();
//   }
  
//   const processJSONData = (data, searchTerm) => {
//     let productExists = false;
  
    
//     data.forEach((category) => {
//       category.forEach((product) => {
        
//         if (product.name.toLowerCase().includes(searchTerm)) {
//           productExists = true;
//           return;
//         }
//       });
//     });
//     const messageParagraph = document.createElement("p");

//     if (searchTerm && productExists) {
//         alert("המוצר קיים, חפש אותו בהזמנות");
//         messageParagraph.textContent = "great! Item found. Look for it in the order.";
//        window.location.href = "order.html";
//     } else {
    
//       const messageParagraph = document.createElement("p");
//       if (!searchTerm) {
//         messageParagraph.textContent = "Please enter a search term.";
//       } else {
//         messageParagraph.textContent = "No such product exists.";
//       }
//       document.getElementById("searchResults").appendChild(messageParagraph);
//     }
//   }




// סקרול עמוד הבית
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('top_nav');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
 





  //סקרול מהחץ

  const logo_on_video = document.getElementById('logo_on_video');
  const text_coffee_rimon = document.getElementById('text_coffee_rimon');
  logo_on_video.onclick=()=>{
    window.scrollTo(0, text_coffee_rimon);

  }