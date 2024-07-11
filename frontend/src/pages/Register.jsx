import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../services/state/auth/authSlice";
import Spinner from "../components/ui/SpinnerLoading";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });
  const { fullName, email, password, password2 } = formData;

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
    if (password !== password2) {
      toast.error("Passwords are different");
    } else {
      const userData = { fullName, email, password };
      dispatch(register(userData));
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="flex flex-col items-center py-28">
      <h1 className="font-bold">Sign Up</h1>
      <p className="mt-4 text-fs-md">
        Have an account?{" "}
        <Link to="/login" className="text-primary">
          Log In
        </Link>
      </p>
      <form onSubmit={onSubmit} className="my-6 space-y-7">
        <div className="flex flex-col space-y-8">
          <input
            className="min-h-12 max-w-full rounded-md p-3 drop-shadow-sm"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full Name"
            value={fullName}
            onChange={onChange}
          />
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
          <input
            className="min-h-12 max-w-full rounded-md p-3 drop-shadow-sm"
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
          />
        </div>

        <Button className="min-w-full" intent="primary" type="submit">
          {" "}
          Sign up
        </Button>
      </form>
    </section>
  );
}
