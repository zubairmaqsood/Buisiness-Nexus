import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import './Login.css'


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate();


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    setError("")
    const response = await loginUser(data)

    //if error occur
    if (response.message) {
      setError(response.message)
    }

    //if user is loggedin successfully
    else {
      setError("")
      const { role, token } = response
      localStorage.setItem("token", token)
      navigate(role === "entrepreneur" ? "/dashboard/entrepreneur" : "/dashboard/investor")
    }
  };

  return (
    <>
      <div className='loginParentDiv'>

        <div className='loginContainer'>

          <div className='loginHeading'>
            <h1>Login</h1>
          </div>

          <form className='loginForm' onSubmit={handleSubmit(onSubmit)} >
            {/* for error message */}
            {
              error && (
                <div className='loginError'>
                  {error}
                </div>
              )
            }

            {/* for email field */}
            <TextField
              {...register("email", {
                required: { value: true, message: "Email is required" }, pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
                }
              })}

              label="Enter Email"
              margin='normal'
              size='meduim'
              fullWidth
              type='email'
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            {/* for password field */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Enter Password</InputLabel>
              <OutlinedInput
                {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Password must have atleast 8 characters" }, maxLength: { value: 64, message: "Password must not be above 64 characters" } })}

                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                size='meduim'
                margin='dense'
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Enter Password"
              />
            </FormControl>
            {errors.password && <div className='passwordError'>{errors.password.message}</div>}

            <input className='loginButton' disabled={isSubmitting} type="submit" value="Login" />


            <p className='footerText'>Don't have an account?<NavLink className='loginLink' to='/register'>Register</NavLink></p>
          </form>

        </div>
      </div>
    </>
  )
}
