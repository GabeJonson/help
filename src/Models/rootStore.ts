import { types } from 'mobx-state-tree';
import usersStore from './users';

const rootStore = types
  .model('rootStore', {
    users: types.map(usersStore),
  })
  .actions(self => ({
    addUsers(id: string, userName: string, userBirth: string) {
      self.users.set(id, usersStore.create({ userName, userBirth }));
    },
  }));

export default rootStore;
