$(document).ready(readyNow);

let employeeInfoTable = []
let totalSalary = 0

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
        <span class= "IDSpan"><td>${employeeInfoTable[i].ID}</td></span>
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
    ID: IDNumber,
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
    calculateTotalSalary()
}


//CALCULATE TOTAL SALARYS//
function calculateTotalSalary(){
 for(let i = 0; i < employeeInfoTable.length; i++){
    totalSalary = (employeeInfoTable[i].SalaryList/12)
 }
 console.log(totalSalary)
 render()
}

//SUBTRACT FROM SALARY WHEN DELETED//




//CHANGE TOTAL NUMBER COUNT TO RED WHEN OVER 20K PER MONTH//




//DELETE EMPLOYEE BASE//
function deleteEmployee(){
    console.log('hey')
    $(this).parent().parent().remove()
}
//   let deleteButtonClick = $(this);
//   let IDSpan = deleteButtonClick.parent();
//   let IDInfo = IDSpan.val();
//  console.log(IDInfo)

// let Stillemployed = [];

// for(let theEmployees of employeeInfoTable){
//   if(IDInfo !== theEmployees.ID){
//     Stillemployed.push(theEmployees);
//   }
// employeeInfoTable = Stillemployed;
// render();
// }  
// }