/*
  student: Ishmael Sunday | http://ishmaelsunday.com
  Course: Code 201: Software Development and Application Foundatmental 
  Schoool: Code Partners | https://codepartners.net 
  Project: Object Oriented Model for a Cookie Store
  */

//Store Model (Object Constructor function)

let storeArray = [];

let mainTable = document.getElementById('data-table');

let storeForm = document.getElementById('store-form');


let Store = function(name, employees, storeOpens, storeCloses, salePerHour, minCustPerHour, maxCustPerHour) {
    this.name = name,
    this.employees = employees;
    this.storeOpens = storeOpens;
    this.storeCloses = storeCloses;
    this.salePerHour = salePerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.minCustPerHour = minCustPerHour;
    this.totalSalePerDay = 0;
    this.salePerHourArray = [];

//function that generates ramdom number of customer per hour

this.totalSalePerHour = function () {
   return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour * this.salePerHour;
}

}

//create instances of store

let capeMount = new Store('Pats Original', 4, 6, 14, 40, 21, 43);
let sinoe = new Store('Sugar Free', 6, 6, 14, 33, 23, 12);
let lofa = new Store('Butter Cake', 4, 6, 14, 31, 14, 45);



//Use push method to add Array

storeArray.push(capeMount, sinoe, lofa);

//function that dynamically display header row for our table

function displayTabHeader() {
  //first lets create a row for header content
  let headRow = document.createElement('tr'); // row created
  mainTable.appendChild(headRow);//row placed in table

  //nameHeader for the table and place it in the row we created
  let nameHeader = document.createElement('th'); // table header created
  headRow.appendChild(nameHeader); // table header placed inside the row see line 46
  
  // use inner html to set header title
  nameHeader.innerHTML = 'Cookies Menu';



  //lets create function that loops through store hours from open to close
  for(let i = 6; i < 14; i++) {
    
    //now create header to display time across the top
     let timeHeader = document.createElement('th');
     headRow.appendChild(timeHeader);

     // set inner html
     timeHeader.innerHTML = i + ':00 Hours';
  }

  //now lets make a header that displays total at the far right end
  let totalHeader = document.createElement('th');
  //Place it inside the header row
  headRow.appendChild(totalHeader);
  
  //Place the word 'Total' inside as title
  totalHeader.innerHTML = 'Total';
}





//Displaying each store data across the table.

function displayTotalSale(store) {
  let storeRow = document.createElement('tr');

  //place the Row in the main table
  mainTable.appendChild(storeRow);

  //let create a header for store data
  let storeHeader = document.createElement('th');

  //let place the header in the row
  storeRow.appendChild(storeHeader);

  //set title
  storeHeader.innerHTML = store.name;

  //Now let loop through the time and display each hours across
  for(let i = store.storeOpens; i < store.storeCloses; i++) {

    let result = store.totalSalePerHour();

    //let create td  to display the result for each hour
    let storeHourlyData = document.createElement('td');

    //add the td to store Row
    storeRow.appendChild(storeHourlyData);

    //now let populate td with the data
    storeHourlyData.innerHTML = result;

    // Now let reassign hourly sell value by adding result
    store.totalSalePerDay += result;

    store.salePerHourArray.push(result);
  }


  //Now that all of our data of each store are for each hour, let create an element the total

  let dailyTotalTable = document.createElement('th'); // header of total is created

  //let place the in the tabel Row
  storeRow.appendChild(dailyTotalTable);// header now in the table Row

  //Let let populate it with the daily total data
  dailyTotalTable.innerHTML = store.totalSalePerDay; // the numbers are in.

}







//function that displays footer with total data

function displayTabFooter() {

  //lets create a row
  let tabFooterRow = document.createElement('tr');

  //appand
  mainTable.appendChild(tabFooterRow);
  tabFooterRow.setAttribute('class','grand-total');

  //let create a table head for footer
  let tabFooterTitle = document.createElement('th');

  //append
  tabFooterRow.appendChild(tabFooterTitle);
  

  // set inner html to..
  tabFooterTitle.innerHTML = 'Total';

  // declear a variable that holds total sales for each location

  let total = 0;

  // loop that run through open to close  hours

  for(let i = 0; i < 8; i++) {

    //variable that hold the value and track
    let totalSalePerHour = 0;

    for(let j = 0; j < storeArray.length; j++){
      totalSalePerHour += storeArray[j].salePerHourArray[i];
      console.log('inner for loop', storeArray[j].name, j);
    }

    //new th for for total sales per hour
    let totalSalePerHourfooter = document.createElement('th');

    //append
    tabFooterRow.appendChild(totalSalePerHourfooter);
    

    //place the data
    totalSalePerHourfooter.innerHTML = totalSalePerHour;

    //add hourly sales values
    total += totalSalePerHour;
  }
  
  console.log(total);
  
  //th that holds daily sale total
  let totalSalePerDayFooter = document.createElement('th');

  //append
  tabFooterRow.appendChild(totalSalePerDayFooter);
 

  // let...
  totalSalePerDayFooter.innerHTML = total;
}

//===================================================

//for store name and its value..
let storeName = storeForm.storeName;
let salePerHour = storeForm.salePerHour;

//function that let user create new store

function createNewStore(event){
  // stop page from refreshing by using pre default method
  event.preventDefault();

  //remove old before creating the new
  console.log('event firing', mainTable.childNodes);
  mainTable.removeChild(mainTable.childNodes[mainTable.childNodes.length - 1]);

  //declaring a another store.
  let newStore = new Store(storeName.value, 600, 6, 14, salePerHour.value, 12, 50);

  //adding new store
  storeArray.push(newStore);
  

  //invoke the this to display the data for the new store
 displayTotalSale(newStore); 

  //per added store, run displayfooter() to get new total.
  displayTabFooter();
}




//add event listner to form

storeForm.addEventListener('submit', createNewStore);
console.log(storeForm.storeName)






//function that will pupulate initial table
function populateTab() {
  //invoke..
  displayTabHeader();

  //loop through store Array
  for(let i = 0; i < storeArray.length; i++) {

    //call this funtion..
   displayTotalSale(storeArray[i]);
  }
  //do this to display all of our total footer
  displayTabFooter();
}

// this will display all our initial table on when page loads
populateTab();



