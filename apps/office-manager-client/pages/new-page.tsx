import React from 'react';

import styles from './new-page.module.scss';

/* eslint-disable-next-line */
export interface NewPageProps {}

export function NewPage(props: NewPageProps) {
  return (
    <div className={styles.test}>
      <h1>Welcome to new-page!</h1>
    </div>
  );
}

export default NewPage;
