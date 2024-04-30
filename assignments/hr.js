let HR1 = [
    {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary": 40000,
        "raiseEligible": true
    },
    {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary": 18500,
        "raiseEligible": true
    },
    {
        "firstName" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary": 21200,
        "raiseEligible": false
    }
];

console.log(HR1);

const HR2 = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": HR1
};

console.log(HR2);

const Anna = {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary": 25600,
    "raiseEligible": false
};

HR2.employees.push(Anna);
console.log(HR2);


function calcSalary(json){
    let totalSalary = 0;
    for(let i = 0; i < json.employees.length; i++){
        totalSalary += json.employees[i].salary;
    }
    return totalSalary;
}
console.log(calcSalary(HR2));

function giveRaises(json){
    for(let i = 0; i < json.employees.length; i++){
        if(json.employees[i].raiseEligible){
            json.employees[i].raiseEligible = false;
            json.employees[i].salary += json.employees[i].salary * 0.1;
        }
    }
}
giveRaises(HR2);
console.log(HR2);


function workFromHome(json){
    const workingFromHome = ["Anna", "Sam"];

    for(let i = 0; i < json.employees.length; i++){ //looping through employees
        json.employees[i].wfh = false;
        for(let j = 0; j < workingFromHome.length; j++){ //and through workingFromHome
            if(json.employees[i].firstName === workingFromHome[j]){
                json.employees[i].wfh = true;
            }
        }
    }
}

workFromHome(HR2);
console.log(HR2);

//"wfh": true

//finishing step here