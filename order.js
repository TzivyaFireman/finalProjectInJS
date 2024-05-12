const breakfast = document.querySelector("#breakfast>img");
const jumpBreakfast = document.getElementById("jumpBreakfast");
const alllll = document.getElementById("alllll");
const lunch = document.querySelector("#lunch>img");
const jumpLunch = document.getElementById("jumpLunch");
const drinks = document.querySelector("#drinks>img");
const jumpDrinks = document.getElementById("jumpDrinks");
const exit = document.getElementById("exit");


// הצגה של הסל
const sal = document.getElementById("sal");
const salButton = document.getElementById("salButton");

salButton.addEventListener("mouseover", function () {
    sal.style.display = "block";
});
salButton.addEventListener("mouseleave", function () {
    sal.style.display = "none";


});
sal.addEventListener("mouseover", function () {
    sal.style.display = "block";
});
sal.addEventListener("mouseleave", function () {
    sal.style.display = "none";
});







//לוקל סטורייג-הצגה של השם
const hello = document.getElementById('hello');
const currentUserEmail = localStorage.getItem("currentEmail");
const stringCurrentUser = localStorage.getItem(currentUserEmail);
const currentUser = JSON.parse(stringCurrentUser);
hello.innerHTML = "היי " + currentUser.firstName + " " + currentUser.lastName;
////////////////////////////////


//בוקר

breakfast.addEventListener("click", function () {
    jumpBreakfast.style.display = "flex";
    exit.style.display = "block";
    jumpLunch.style.display = "none";
    jumpDrinks.style.display = "none";



})


//צהריים

lunch.addEventListener("click", function () {

    jumpLunch.style.display = "flex";
    exit.style.display = "block";
    jumpBreakfast.style.display = "none";
    jumpDrinks.style.display = "none";

});

//משקאות

drinks.addEventListener("click", function () {

    jumpDrinks.style.display = "flex";
    exit.style.display = "block";
    jumpLunch.style.display = "none";
    jumpBreakfast.style.display = "none";
});




exit.addEventListener("click", function () {
    jumpBreakfast.style.display = "none";
    jumpLunch.style.display = "none";
    jumpDrinks.style.display = "none";
    exit.style.display = "none";
});





//קריאת שרת


let AllProducts = [[], [], []]
$.ajax({
    url: "./hh.json",
    success: (result) => {
        // alert("נכנס לרגקס");
        console.log(result);
        AllProducts = result;
        drawAllProducts();
    }
});






// פונקציה מציירת מוצרים
const drawAllProducts = () => {
    //  alert("נכנס לצייר הכל");
    drawBreakfast(AllProducts[0]);
    drawLunch(AllProducts[1]);
    drawCake(AllProducts[2]);




}
// מציירת מוצרים ארוחת בוקר
const drawBreakfast = (products) => {
    // alert("נכנס לצייר בוקר");

    products.forEach(i => {
        const li = drawProduct(i);
        jumpBreakfast.appendChild(li);
    });

}

// מציירת מוצרים ארוחת צהריים
const drawLunch = (product) => {
    // alert("נכנס לצייר צהריים");

    product.forEach(i => {
        const li = drawProduct(i);
        jumpLunch.appendChild(li);
    });

}

// מציירת מוצרים עוגות
const drawCake = (product) => {
    // alert("נכנס לצייר עוגות");

    product.forEach(i => {
        const li = drawProduct(i);
        jumpDrinks.appendChild(li);
    });

}


// פונקציה מציירת מוצר בודד
const drawProduct = (product) => {
    // alert("נכנס לצייר מוצר אחד");

    const li = document.createElement('li');
    li.innerHTML =
        `<div id="kindMeal">
        <img src="${product.url}" width="300px" height="200px">
        <span>${product.name}</span>
        <p class="detail text_center">${product.description}<p>
        <p class="price">${product.price}$</p>
        <i class="fas fa-cart-plus" id="carriage"></i>
    </div>`;
    // alert("גמר לצייר את מוצר 1");



    //עגלה-הזמנה
    // ציור עגלה תוצג בריחוף על הארוחה
    const kindMeal = li.querySelector('#kindMeal');
    const carriage = kindMeal.querySelector('#carriage');
    kindMeal.addEventListener("mouseover", function () {
        carriage.style.opacity = '1';
    });
    kindMeal.addEventListener("mouseout", function () {
        carriage.style.opacity = '0';
    });

    //הוספה לעגלה
    carriage.addEventListener("click", function () {
        //הכנסת מוצר ללוקל סטורייג
        const sal = document.getElementById('sal');
        const salButton = document.getElementById('salButton');

        currentUser.order.AllProducts.push(product);
        currentUser.order.total += product.price;
        const currentUserUpdated = JSON.stringify(currentUser);
        localStorage.setItem(currentUserEmail, currentUserUpdated);
    });


    //הצגה של המוצר בסל
    const prodInSal = document.createElement('div');


    //מצייר בסל 
    salButton.addEventListener("mouseover", () => {
        // alert("מצייר מוצר בסל...");

        const prodInSal = document.createElement('div');
        const products = JSON.parse(localStorage.getItem(currentUserEmail)).order.AllProducts;
        sal.innerHTML = "ההזמנות שלי";
        products.forEach(product => {
            prodInSal.innerHTML +=
                `<div id="g">
            <img src="${product.url}" width="50px">
            <span>${product.name}</span>
            <p>${product.price}$</p>
            <button class="deleteProduct">למחיקת המוצר</button>
            </div>`;
        });
        sal.innerHTML += `<p>${currentUser.order.total}סכום לתשלום!<p>`;
        sal.innerHTML += `        <a href="./pay.html">
        <button>למעבר לתשלום</button></a>`;

        sal.appendChild(prodInSal);







        //מחיקת מוצר מהסל
        const deleteProductButtons = document.querySelectorAll(".deleteProduct");

        deleteProductButtons.forEach((deleteProductButton) => {
            deleteProductButton.addEventListener("click", (event) => {
                const eventTarget = event.target;
                const productDiv = eventTarget.parentNode;
                const brother = productDiv.querySelector("span");
                const productName = brother.innerHTML;
                deleteProduct(productName);
                alert("המוצר נמחק בהצלחה"), { class: "alert", };
                return productName;

            });

        });

        function deleteProduct(productName) {
            // מוצאים את האינדקס של המוצר
            const index = currentUser.order.AllProducts.findIndex(p => p.name === productName);
            // מעדכנים את המחיר הכולל

            currentUser.order.total -= currentUser.order.AllProducts[index].price;
            // מוחקים את המוצר מהמערך

            currentUser.order.AllProducts.splice(index, 1);


            // שומרים את המשתמש המעודכן בלוקל סטורייג
            const currentUserUpdated = JSON.stringify(currentUser);
            localStorage.setItem(currentUserEmail, currentUserUpdated);

        }
    });


    return li;
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
