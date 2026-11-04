const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
type Order = {
    id: number;
    pizza: { name: string; price: number };
    status: string;
}

const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: { name: string; price: number }) {
    menu.push(pizzaObj)
}
function placeOrder(pizzaName :string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (selectedPizza){
    cashInRegister += selectedPizza.price
     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
      orderQueue.push(newOrder)
      return newOrder; 
    }


   
}

function completeOrder(orderId : number) {
    type order = {
         id: number;
         pizza:string;
         status: string;
    }
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)