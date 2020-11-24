import React from 'react';
import { useSelector } from "react-redux";

import Loader from './Loader';
import Error from '../layouts/Error';

const withRequestStatus = WrappedComponent => () => {
  const { hasErrored, isLoading } = useSelector(state => state);

  return (
    <section className='main-section'>
      {isLoading ? <Loader /> : hasErrored ? <Error /> : <WrappedComponent />}
    </section>
  );

}

export default withRequestStatus;
