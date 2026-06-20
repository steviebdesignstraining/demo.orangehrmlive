export const adminTestData = {
  userToCreate: {
    username: `candidate_${Date.now()}`,
    employeeName: 'James T Brown',
    password: 'TempPass123!',
    role: 'Admin',
    status: 'Enabled',
  },

  userToEdit: {
    username: `editTarget_${Date.now()}`,
    employeeName: 'James T Brown',
    password: 'TempPass123!',
    role: 'Admin',
    status: 'Enabled',
    editedUsername: `edited_${Date.now()}`,
  },

  userToDelete: {
    username: `deleteTarget_${Date.now()}`,
    employeeName: 'James T Brown',
    password: 'TempPass123!',
    role: 'Admin',
    status: 'Enabled',
  },

  e2eUser: {
    employeeName: 'James T Brown',
    password: 'TempPass123!',
    role: 'Admin',
    status: 'Enabled',
    usernamePrefix: 'jamesbrown',
  },
};
