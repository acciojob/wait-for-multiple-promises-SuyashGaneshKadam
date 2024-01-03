// Get table reference
const table = document.getElementById('output');

// Add loading row 
const row = table.insertRow(-1);
row.id = 'loading';
const cell1 = row.insertCell(0);
cell1.colSpan = 2;  
cell1.innerHTML = "Loading...";

// First promise is slower
const promise1 = new Promise(resolve => {
  setTimeout(() => resolve(4000/1000), 4000);
});

const promise2 = new Promise(resolve => {
  const delay = Math.random() * 2000 + 1000;
  setTimeout(() => resolve(delay/1000), delay); 
});

const promise3 = new Promise(resolve => {
  const delay = Math.random() * 2000 + 1000;
  setTimeout(() => resolve(delay/1000), delay);
});

const promises = [promise1, promise2, promise3];

// Wait for promises  
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
  totalCell1.innerHTML = "Total";
  totalCell2.innerHTML = results.reduce((a, b) => a + b, 0); 

});