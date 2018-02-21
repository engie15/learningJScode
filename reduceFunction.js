//map, filter, reject, find all Higher-Object Functions
//reduce is the Super list transformation.  All the above functions are list transformation.

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var totalAmount = orders.reduce(function (sum, order) {
    return sum + order.amount
}, 0)