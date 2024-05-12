const formContainer = document.getElementById("formContainer");
const scrollToOrder = document.getElementById("scrollToOrder");
scrollToOrder.addEventListener("click", () => {
  formContainer.scrollIntoView({ behavior: "smooth" }, 50);
});


const Form = document.getElementById('Form');
var hello = document.querySelector("#hello");

const dom = {
  Form: Form,
  FormData: {
    firstName: document.getElementById('fName'),
    lastName: document.getElementById('lName'),
    email: document.getElementById('email'),
  }
}

dom.Form.onsubmit = (event) => {
  const user = {
    firstName: dom.FormData.firstName.value,
    lastName: dom.FormData.lastName.value,
    email: dom.FormData.email.value,
    order: {
      AllProducts: [],
      total: 0,
    },
  }
  event.preventDefault();
  localStorage.setItem(user.email, JSON.stringify(user));
  localStorage.setItem("currentEmail", user.email);
  alert(user.email);

  alert("היי" + user.firstName);
  var nameOfUser = user.email;
  alert(nameOfUser);
  window.location.href = "./order.html";

  dom.Form.reset();

}

//const userName = document.getElementById("userName");

// userName.innerHTML=localStorage.getItem("firstName");


const formUser = document.getElementById('formUser');
const keyEmail = document.getElementById('keyEmail');
formUser.onsubmit = (event) => {
  event.preventDefault();
  const currentEmail = keyEmail.value;
  localStorage.setItem("currentEmail", currentEmail);
  const get_item = localStorage.getItem(currentEmail);
  formUser.reset();
  window.location.href = "./order.html";

}

































//סקרול של הניתוב העליון

window.addEventListener('scroll', function () {
  var nav = document.getElementById('top_nav');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});


























//   //חיפוש
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














const searchProducts = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();  // Clear previous search results
  document.getElementById("searchResults").innerHTML = "";
  // Make an AJAX request to fetch the JSON data 
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./hh.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      processJSONData(data, searchTerm);
    }
  };
  xhr.send();
}
const processJSONData = (data, searchTerm) => {
  let productExists = false;
  let product;
  data.forEach((category) => {
    category.forEach((productItem) => {
      if (productItem.name.toLowerCase().includes(searchTerm)) {
        productExists = true; product = productItem;
        return;
      }
    });
  });
  if (productExists) {
    // Redirect the user to the product page 

    // window.location.href = product.url;
    document.getElementById("searchResults").innerHTML=   `<div id="kindMeal">
    <img src="${product.url}" width="300px" height="200px">
    <span>${product.name}</span>
    <p class="detail text_center">${product.description}<p>
    <p class="price">${product.price}$</p>
    <i class="fas fa-cart-plus" id="carriage"></i>
</div>`;

  }
  else {
    const messageParagraph = document.createElement("p");
    if (!searchTerm) {
      messageParagraph.textContent = "Please enter a search term.";
    }
    else { messageParagraph.textContent = "No such product exists."; }
    document.getElementById("searchResults").appendChild(messageParagraph);
  }
}




















//Vופסה לעגלה בשביל החיפוש

carriage.addEventListener("click", function () {
  //הכנסת מוצר ללוקל סטורייג
  const sal = document.getElementById('sal');
  const salButton = document.getElementById('salButton');

  currentUser.order.AllProducts.push(product);
  currentUser.order.total += product.price;
  const currentUserUpdated = JSON.stringify(currentUser);
  localStorage.setItem(currentUserEmail, currentUserUpdated);
});

