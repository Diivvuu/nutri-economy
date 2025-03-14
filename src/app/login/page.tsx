'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { postLogin, postRegister } from '../redux/actions/authActions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Header from '../_components/Header';

const page = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const {
    user: loginUser,
    loading: loginLoading,
    error: loginError,
  } = useSelector((state: RootState) => state.auth.login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    if (!isLogin) {
      try {
        const response = await dispatch(
          postRegister(formData.username, formData.password)
        );
        console.log('what', response);
        if (response?.success) {
          // router.push('/user/dashboard');
          toast.success('User registered succesfully, you may sign in now');
        }
      } catch (error: any) {
        console.error('Error in register', loginError);
        toast.error('Error registering user', error.message);
      }
    } else {
      try {
        const response = await dispatch(
          postLogin(formData.username, formData.password)
        );
        if (response?.success) {
          router.push('/user/dashboard');
          toast.success('User logged in succesfully');
        }
      } catch (error: any) {
        console.error('Error in login', error);
        toast.error('Error logging in user', error.message);
      }
    }
    console.log('Form submitted:', formData);
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="font-exo text-3xl font-bold text-primary">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="font-mabry text-gray-600 mt-2">
              {isLogin
                ? 'Sign in to access your account'
                : 'Register to get started with our platform'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="font-exo font-medium text-gray-700 block mb-2"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="font-mabry appearance-none block w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-exo font-medium text-gray-700 block mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="font-mabry appearance-none block w-full px-3 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-exo font-medium text-black hover:text-secondary-dark"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="font-exo w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="font-mabry text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                onClick={toggleView}
                className="ml-1 font-exo font-medium text-black hover:text-secondary-dark"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
