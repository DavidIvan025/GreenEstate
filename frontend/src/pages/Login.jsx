<<<<<<< HEAD
import Button from "../components/ui/Button";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../services/state/auth/authSlice";
import Spinner from "../components/ui/SpinnerLoading";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="flex flex-col items-center py-28">
      <h1 className="font-bold">Sign In</h1>
      <p className="mt-4 text-fs-md">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary">
          Sign Up
        </Link>
      </p>
      <form onSubmit={onSubmit} className="my-6 space-y-7">
        <div className="flex flex-col space-y-8">
          <input
            className="min-h-12 max-w-full rounded-md p-3 drop-shadow-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={onChange}
          />
          <input
            className="min-h-12 max-w-full rounded-md p-3 drop-shadow-sm"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>

        <Button className="min-w-full" intent="primary" type="submit">
          {" "}
          Sign in
        </Button>
      </form>
    </section>
  );
=======
import Button from '../components/ui/Button'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../services/state/auth/authSlice'
import Spinner from '../components/ui/SpinnerLoading'

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess || user) navigate('/')
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const userData = { email, password }
    dispatch(login(userData))
  }

  return (
    isLoading ? <Spinner /> : (
      <section className='flex flex-col py-28 items-center'>
        <h1 className='font-bold'>Sign In</h1>
        <p className='text-fs-md mt-4'>Don't have an account? <Link to='/register' className='text-primary'>Sign Up</Link></p>
        <form onSubmit={onSubmit} className='my-6 space-y-7'>
          <div className='flex flex-col space-y-8'>
            <input className='min-h-12 max-w-full rounded-md p-3 drop-shadow-sm' type="email" name="email" id="email" placeholder='Enter your Email Address' value={email} onChange={onChange} />
            <input className='min-h-12 max-w-full rounded-md p-3 drop-shadow-sm' type="password" name="password" id="password" placeholder='Password' value={password} onChange={onChange} />
          </div>

          <Button className="min-w-full" intent="primary" type='submit'> Sign in</Button>

        </form>
      </section>
    )
  )
>>>>>>> 1c325eb56a95b56aca6e16e74e09b141bce11010
}
