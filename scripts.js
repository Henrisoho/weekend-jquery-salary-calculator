$(document).ready(readyNow);

let employeeInfoTable = []
let value = 0

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
        <td>${employeeInfoTable[i].iD}</td>
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
    Red()
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
 $('#totalMonthlySalary').text(`Monthly Total: ${value}`)
 render()
}

//SUBTRACT FROM SALARY WHEN DELETED//




//CHANGE TOTAL NUMBER COUNT TO RED WHEN OVER 20K PER MONTH!!//
function Red(){
if (value >= 20000){
    $('#totalMonthlySalary').addClass('Over20k')
}
else{
    $('#totalMonthlySalary').removeClass('Over20k')
}
console.log(`testing red ${value}`)
}


//DELETE EMPLOYEE BASE//
// function deleteEmployee(){
//     console.log('hey')
//     $(this).parent().parent().remove()
// }



function deleteEmployee(){
let deleteButtonClick = $(this);
let IDSpan = deleteButtonClick.parent().parent();
let IDInfo = IDSpan.text();
 console.log(IDInfo)

let Stillemployed = [];

for(let theEmployees of employeeInfoTable){
  if(IDInfo !== theEmployees){
    Stillemployed.push(theEmployees);
  }
employeeInfoTable = Stillemployed;
render();
}  
}