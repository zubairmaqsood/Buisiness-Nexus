import React, { useState } from 'react'
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
import { registerUser } from '../../services/authService';
import TextField from '../../components/TextField';
import "./Register.css"

function Register() {

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
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    setError("")
    const response = await registerUser(data)

    //if error occur
    if (response.message) {
      setError(response.message)
    }

    //if user is registered successfully
    else {
      setError("")
      const { token } = response
      localStorage.setItem("token", token)
      navigate("/dashboard")
    }
  };

  return (
    <>
      <div className="registerParentDiv">

        <div className="registerContainer">

          <div className='registerHeading'>
            <h1>Create an account</h1>
          </div>

          <form className='registerForm' onSubmit={handleSubmit(onSubmit)} >
            {/* for error message */}
            {
              error && (
                <div className='registerError'>
                  {error}
                </div>
              )
            }

            {/* for name field from TextField.jsx component*/}
            <TextField
              register={register}
              name='name'
              requireMessage='name is required'
              label='Name'
              type='text'
              errors={errors}
            />


            {/* for email field from TextField.jsx component*/}
            <TextField
              register={register}
              name='email'
              requireMessage='Email is required'
              label='Email'
              type='email'
              patternValue='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/' patternErrorMsg='Invalid email address'
              errors={errors}
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

            <div className='roleContainer'>
              <label htmlFor="entrepreneur">Entrepreneur</label>

              <input type="radio" {...register("role", { required: { value: true, message: "Role is required" } })} value="entrepreneur" id="entrepreneur" />

              <label htmlFor="investor">Investor</label>

              <input type="radio" {...register("role", { required: { value: true, message: "Role is required" } })} value="investor" id="investor" />
            </div>
            {errors.role && <div className='passwordError'>{errors.role.message}</div>}

            <input className='registerButton' disabled={isSubmitting} type="submit" value="Register" />

            <p className='footerText'>Already have an account?<NavLink className='registerLink' to='/login'>Login</NavLink></p>
          </form>

        </div>

      </div>
    </>
  )
}

export default Register
