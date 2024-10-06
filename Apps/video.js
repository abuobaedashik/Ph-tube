console.log("video script added")

// catagory Load funtion 
const Loadcatagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => Displaycatagory(data.categories))
    // .catch(error=> console.error(Error,"do not write systex"));
}

// Display catagory funtion 
const Displaycatagory = (category) => {
    category.map(item => {
        console.log(item.category)

        const btn = document.getElementById("category-btn")
         const button =document.createElement("button")
         button.classList.add("btn", "justify-between", "items-center")
         button.innerText = item.category
         btn.append(button);
    })
}

Loadcatagory(); 