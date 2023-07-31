const employee = {
  name: "jasmin",
  streetAddress: "555 chestnut st",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return { ...employee, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
    const newObj = {...employee}
    delete newObj[key]
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}