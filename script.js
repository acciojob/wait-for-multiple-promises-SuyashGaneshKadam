//your JS code here. If required.
// Add loading row
const table = document.getElementById('table');
const row = table.insertRow(-1);
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
cell1.colSpan = 2;
cell1.innerHTML = "Loading...";

// Create promises
const promises = [];
for (let i = 1; i <= 3; i++) {
  const promise = new Promise(resolve => {
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => resolve(delay/1000), delay); 
  });
  promises.push(promise);
}

// Wait for all promises
Promise.all(promises).then(results => {

  // Remove loading row
  table.deleteRow(-1);

  // Add result rows
  results.forEach((result, i) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = `Promise ${i+1}`; 
    cell2.innerHTML = result;
  });
  
  // Add total row
  const totalRow = table.insertRow(-1);
  const totalCell1 = totalRow.insertCell(0);
  const totalCell2 = totalRow.insertCell(1);
  const total = results.reduce((a, b) => a + b, 0);
  totalCell1.innerHTML = "Total";
  totalCell2.innerHTML = total;

});