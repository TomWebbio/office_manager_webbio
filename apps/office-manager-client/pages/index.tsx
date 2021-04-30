import React from 'react';
import Link from 'next/link';

import styles from './index.module.scss';

// import { shared } from 'libs/shared/src/index';

import { shared } from '@office-manager-webbio/shared';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  const test = shared();
  return (
    <div>
      <div>Hallo</div>
      <div>
        <Link href="/shop">Go to shop!</Link>
      </div>
    </div>
  );
}

export default Index;
