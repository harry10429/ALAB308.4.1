

let title = "id,name,occupation,age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitRows = title.split("\n");
let tableElement = [];
let columnHeaders = splitRows[0].split(",");
let numberOfColumns = columnHeaders.length;
let count = 0;

for (let element of splitRows) {
  let cell = element.split(",");
  tableElement[count] = cell;
  count++;
}
console.log("Number of columns:", numberOfColumns);
console.log(tableElement);
let tableObj = [];
let head = tableElement[0];

//transforming Data
for (let i in tableElement) {

  if (head == tableElement[i]) { continue; }
  let temp = {};
  for (let j in head) {

    let objtemp = tableElement[i];

    temp[head[j]] = objtemp[j];

    if (j == head.length - 1) {
      tableObj[i - 1] = temp;

    }
  }

}

console.log("After transforming data into array object", tableObj);

//sorting and manipulating
tableObj.pop();
// console.log("After popping last element of array",tableObj);
let tempAdd = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
for (let indexN = 1; indexN <= tableObj.length; indexN++) {
  if (indexN == tableObj.length) {
    tableObj[tableObj.length] = tempAdd;
    break;
  }
  let temp = tableObj[indexN];
  tableObj[indexN] = tempAdd;
  tempAdd = temp;


}
// console.log("After add new object at array index 1",tableObj);

//calculate the average age of people 
let addLast = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
tableObj.push(addLast);
console.log("after add object at end of array", tableObj);

let ageSum = 0;

for (let x in tableObj) {
  ageSum += parseInt(tableObj[x].age);

}
let ageAverag = ageSum * 1.00 / tableObj.length;
console.log("the average age of these people is: " + ageAverag+'\n');

//convert back into csv format
let csv = '';
let tempArray = tableObj[0];

let csvHead = Object.keys(tempArray);

for (let x = 0; x < csvHead.length; x++) {
  if (x == csvHead.length - 1) {
    csv += csvHead[x] + '\n';
    break;
  }
  csv += csvHead[x] + ',';

}

for(let y of tableObj){
  let temp = y;
  let count=0;
  for(let z in y ){
   
    if(count==csvHead.length-1){
      csv+= y[z]+'\n';
      break;
    }
  
    csv+= y[z]+",";
    count++;
    
  }

}
console.log("CSV format is converted below: \n"+csv);


