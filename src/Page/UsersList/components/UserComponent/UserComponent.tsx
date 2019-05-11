import React from 'react';
import { Button } from 'components';
import * as api from 'services';
import styles from './UserComponent.module.scss';

interface Props {
  userName: string;
  userBirth: string;
  _id: string;
  onDelete: (data: any) => void;
}

export const UserComponent: React.FC<Props> = ({
  userName,
  userBirth,
  _id,
  onDelete,
}) => {
  return (
    <div className={styles.userData}>
      <p className={styles.userName}>{userName}</p>
      <div className={styles.birthWithSave}>
        <p className={styles.userBirth}>{userBirth}</p>
        <Button
          type="button"
          className={styles.saveButton}
          onClick={() => {
            api.putUser(_id, userName, userBirth);
          }}
        >
          Save
        </Button>
        <Button
          type="button"
          className={styles.deleteButton}
          onClick={() => {
            api.deleteUser(_id).then(({ data }) => {
              onDelete(data);
            });
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
