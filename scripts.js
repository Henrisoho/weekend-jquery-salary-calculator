$(document).ready(readyNow);

let employeeInfoTable = []

function readyNow() {
    $('body').on('click', '.Delete', deleteEmployee);
    $('#Submit').on('click', addEmployee);
}


//RENDER THE DOM FOR EACH EMPLOYEE!!//
function render() {
  $('#employeeTableChart').empty();
  for (let i = 0; i < employeeInfoTable.length; i++) {
      $('#employeeTableChart').append(`
      <tr>
        <td>${employeeInfoTable[i].First}</td>
        <td>${employeeInfoTable[i].Last}</td>
        <td><span id="spanID">${employeeInfoTable[i].iD}</span></td>
        <td>${employeeInfoTable[i].TitleList}</td>
        <td>${employeeInfoTable[i].SalaryList}</td>
        <td>
            <button class="Delete">Delete</button>
        </td>
     </tr>
      `)
}
}


//ADD EMPLOYEE TO ARRAY!!//
function addNewEmployee() {
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let IDNumber = $('#IDInput').val();
  let title = $('#TitleInput').val();
  let salary = $('#salaryInput').val();
  
  let employeeInfo = {
    First: firstName,
    Last: lastName,
    iD: IDNumber,
    TitleList: title,
    SalaryList: salary
  }
  
  employeeInfoTable.push(employeeInfo);
  render()

  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#IDInput').val('');
  $('#TitleInput').val('');
  $('#salaryInput').val('');

  console.log(employeeInfo)
  console.log(employeeInfoTable)
}

//ADD EMPLOYEE TO TABLE!!//
function addEmployee(){
    addNewEmployee()
    calculateMonthlySalary()
}


//CALCULATE TOTAL SALARYS//
function calculateMonthlySalary(){
let employeeMonthlySalaryTemp = 0
 for(let i = 0; i < employeeInfoTable.length; i++){
    employeeMonthlySalaryTemp += Number(employeeInfoTable[i].SalaryList)
 }
  console.log(employeeMonthlySalaryTemp)
  
  let employeeMonthlySalary = Math.round(employeeMonthlySalaryTemp/12)

  console.log(employeeMonthlySalary)

  
 let value = ('$' + employeeMonthlySalary);
 $('#totalMonthlySalary').text(`Monthly Total: ${value}`);

 if (employeeMonthlySalary >= 20000){
    $('#TheDiv').addClass('Over20k');
}
else{
    $('#TheDiv').removeClass('Over20k');
}
console.log(`testing red ${value}`)
 render()
}

//SUBTRACT FROM SALARY WHEN DELETED//




//CHANGE TOTAL NUMBER COUNT TO RED WHEN OVER 20K PER MONTH!!//



//DELETE EMPLOYEE BASE//
//   function deleteEmployee(){
//       console.log('hey')
//       $(this).parent().parent().remove()
//  }


function deleteEmployee(){
let deleteButtonClick = $(this).parent().siblings();
let IDSpan = deleteButtonClick.children().text();
let IDInfo = IDSpan;
 console.log(IDInfo)

let Stillemployed = [];

for(let theEmployees of employeeInfoTable){
  if(IDInfo !== theEmployees.iD){
    Stillemployed.push(theEmployees);
  }
employeeInfoTable = Stillemployed;
console.log(theEmployees.iD)
console.log(Stillemployed)
console.log(IDInfo)
render();
}  
}