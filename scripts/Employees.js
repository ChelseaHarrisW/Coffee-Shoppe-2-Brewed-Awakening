import { getEmployees } from "./database.js"
import {getOrders } from "./database.js"

// Invokes function to copy Employees array basically making a copy in giant string form
const orders = getOrders()

document.addEventListener( // click
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target //
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--") // using split to sort what we want

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) { // we use parseInt to change the string of numbers from the HTML to a interger
                    
                    const employeeOrders = orders.filter(  // filter through the empoyees and their IDs 
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `) //using the .lenghth property to count orders
                }
            }
        }
    }
)
const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

