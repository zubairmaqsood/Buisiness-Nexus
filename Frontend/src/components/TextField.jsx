import { TextField } from '@mui/material'

function TextFields({register,name,requireMessage,label,type,patternValue,patternErrorMsg,errors}) {
    return (
            <TextField
                {...register(name, {
                    required: { value: true, message: requireMessage }//require message fromm prop
                    ,pattern:{value:patternValue,message:patternErrorMsg}
                })}

                label={`Enter ${label}`}//name from prop
                margin='normal'
                size='meduim'
                fullWidth
                type={type}//type from prop
                error={!!errors[name]}//errorName from prop
                helperText={errors[name]?.message}
            />
    )
}

export default TextFields
