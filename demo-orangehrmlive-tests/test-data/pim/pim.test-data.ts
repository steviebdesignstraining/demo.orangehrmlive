export const pimTestData = {
  employeeToSearch: {
    employeeName: "aniket",
    employeeId: "0295",
  },

  employeeToVerify: {
    employeeName: "aniket Ashok",
    employeeId: "671",
  },

  firstOption: {
    label: "First Option",
    value: "1",
  },

  employeeToCreate: {
    firstName: `Test_${Date.now()}`,
    middleName: "M",
    lastName: "User",
    employeeId: "auto",
    otherId: "12345",
    driversLicense: "DL123456",
    licenseExpiryDate: "2025-12-31",
    nationality: "American",
    maritalStatus: "Single",
    dateOfBirth: "1990-01-01",
    gender: "male" as const,
    bloodType: "A+",
    testField: "TestValue",
  },

  employeeToEdit: {
    firstName: "EditTarget",
    lastName: "User",
    editedFirstName: `Edited_${Date.now()}`,
  },

  employeeToDelete: {
    firstName: "DeleteTarget",
    lastName: "User",
  },

  e2eEmployee: {
    firstName: "James",
    middleName: "T",
    lastName: "Brown",
    fullName: "James T Brown",
    employeeIdPrefix: "JB",
    usernamePrefix: "jamesbrown",
    defaultPassword: "TempPass123!",
    createdPassword: "TempPass123!",
    otherId: "OTH789",
    driversLicense: "DL987654",
    licenseExpiryDate: "2026-12-31",
    nationality: "American",
    maritalStatus: "Married",
    dateOfBirth: "1985-05-15",
    gender: "male" as const,
    bloodType: "O+",
    testField: "UpdatedTestValue",
  },
};
