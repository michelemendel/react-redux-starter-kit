import * as React from "react";
import {FormGroup, Label, Input, FormText} from "reactstrap";

interface IProps {
    name: string,
    label: string,
    onChange: Function,
    placeholder: string,
    value: string,
    error: string
}

const TextInput = ({name, label, value, placeholder, onChange, error}) => {
    const isError = error && error.length > 0;

    return (
        <FormGroup id={name} color={isError ? "danger" : ""}>

            <Label for={name}>{label}</Label>

            <Input
                required
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            <FormText color="muted">{error}</FormText>

        </FormGroup>
    );
};

export default TextInput;
