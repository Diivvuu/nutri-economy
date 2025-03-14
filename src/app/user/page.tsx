'use client';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { getUser } from '../redux/actions/authActions';

const page = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log('calling');
    dispatch(getUser());
  }, []);
  return <div className="w-full">user</div>;
};

export default page;
