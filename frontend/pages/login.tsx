import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { FormWrapper } from '../components/FormWrapper'
import { useSessionStorage } from '../hooks/useStorage'

interface LoginProps {
    username: string,
    password: string,
}

interface Credential {
    uuid: string,
    user_uuid: string,
    company_uuid: string,
    username: string,
    displayName: string,
    userType: string,

}


export default function Login() {
    const [loggedIn, setloggedIn, removeLoggedIn] = useSessionStorage("LoggedIn", true)
    const [showPassword, setShowPassword] = useState(false)
    const [values, setValues] = useState<LoginProps>({
        username: '',
        password: '',
    })

    const submitHandler = (data: LoginProps) => {
        const autUser = userService.getDbUserByUsername(data.username)
    }

    const handleClickShowPassword = () => {
        setShowPassword(prevState => {
            return !prevState
        })
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="title">Total Asset Management</div>
                <FormWrapper title="Login">
                    <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => <FilledInput {...field} />}
                        />
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <FilledInput {...field}
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={field.value}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            }

                        />
                        <input className="submit" type="submit" value="Login" />
                    </form>
                </FormWrapper>
            </div>

        </div>
    )
}
