import { types } from 'mobx-state-tree';

const users = types
  .model({
    userName: types.string,
    userBirth: types.string,
  })
  .actions(self => ({
    setName(newName: string) {
      self.userName = newName;
    },

    setBirth(newDate: string) {
      self.userBirth = newDate;
    },
  }));

export default users;
