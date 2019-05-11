import React, { useEffect, useState } from 'react';
import { Button, FormContainer } from 'components';
import { Field } from 'react-final-form';

import * as api from 'services';
import { Detepicker } from './components/Detepicker';
import styles from './UsersList.module.scss';

import { UserComponent } from './components/UserComponent';

import 'react-dates/lib/css/_datepicker.css';

interface UserDetails {
  _id: string;
  userName: string;
  userBirth: string;
}

export const UsersList: React.FC = () => {
  const [users, setUsers] = useState();
  const [loaded, setLoaded] = useState(false);

  const createUser = (value: UserDetails) => {
    api.postUser(value.userName, value.userBirth).then(({ data }) => {
      setUsers(data);
    });
  };

  const deleteUser = (data: any) => {
    setUsers(data);
  };

  useEffect(() => {
    api
      .getUsersList()
      .then(({ data }) => {
        setUsers(data);
      })
      .then(() => {
        setLoaded(true);
      });
  }, []);

  if (!loaded) return <p>loading</p>;

  return (
    <section className={styles.usersContainer}>
      <h1 className={styles.containerHead}>Birthdays list</h1>

      <FormContainer
        onSubmit={createUser}
        initial={{
          userName: '',
          userBirth: '',
        }}
        className={styles.formContainer}
      >
        <Field
          name="userName"
          component="input"
          placeholder="Enter a name"
          className={styles.input}
        />
        <Field
          name="userBirth"
          render={({ input }) => {
            return <Detepicker onChange={input.onChange} {...input} />;
          }}
        />
        <Button type="submit" className={styles.submitButton}>
          Create
        </Button>
      </FormContainer>

      <section className={styles.list}>
        {users.map((user: UserDetails) => (
          <UserComponent {...user} key={user._id} onDelete={deleteUser} />
        ))}
      </section>
    </section>
  );
};
