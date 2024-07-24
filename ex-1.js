function sortCustomerName(customers) {
  let num = customers.length;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {        
        let customer = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = customer;
      }
    }
  }
  return customers;
}

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers)); 

// Bubble Sort Algorithm มี Big O เป็น O(n^2) เพราะเป็น Loop 2ชั้น