import * as React from 'react';
import Input from '@mui/material/Input';

export default function BorderlessInput({title, id, onChange, text, width}) {

    const onValueChange = (e) => {
        let value = e.target.value;
        onChange(value);
    }
    
    return (
        <Input
            id={id}
            sx={{
                width: width || '100%'
            }}
            placeholder={title}
            defaultText={text}
            variant="standard"
            onChange={onValueChange}
            disableUnderline={true}
    />
    );
}
