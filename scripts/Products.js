import { getProducts } from "./database.js"

document.addEventListener( // listen for an event this is a powerful string
    "click",// listen for the CLICK remember chrome wil give you a list
    (clickEvent) => { // begining the function to give instructions on what to do when the system hears the click
        // this event is a powerful object that produces so muuch info **Target is the most important property of the event
        const itemClicked = clickEvent.target //target is where the "click" happened, without specificity the HTML its self will be the target
        // this event startswith ### is a method that pulls items with "startswith"
        if (itemClicked.id.startsWith("product")) { // id properties can be used to specify. since we have converted to HTML you are essentially editing that
            const [, productId] = itemClicked.id.split("--") // string method .split break down an array and creates a new aaray. works well with limiters so that the array prodused  is specific
        // aaray deconstruction. takes place in the array above. this solo comma is producing the array we desire because we only need the "ProductId" split in this instance. these commas can serve as place holders
            
        for (const product of products) { // new loop here that uses the array that weve split to innerate through the items so we can get to the information we are looking for
                if (product.id === parseInt(productId)) { // since above we are working with a stinng "we know this because of the HTML" we want to convert the string to an interger for recognition purposes, and more workable data
                    window.alert(` ${product.name} costs ${product.price}`) //we now have workable data {intergers} sooooo now we can specify the items we would like to see in the window
                }
            } // Did you Know?: debugger is a keyword that forces the debugger to stop on the line it was input on
        }
    }
)
// Defining below!!!!
const products = getProducts() /// this varible is needed for the event to take place
// Defining below!!!
export const Products = () => {  // this is needed to produce HTML so that  will give workable or readable data to the DOM
    let html = "<ul>" /// That is this functions Responsibility Chelsea

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

// exports are so important to allow the functions the ability to be called throuought the module