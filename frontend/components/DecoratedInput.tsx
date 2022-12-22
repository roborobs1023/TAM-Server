import { InputLabel, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { FC, ReactNode } from 'react'

interface InputProps {
    id?: string;
    tabIndex?: number;
    label: string;
    name: string;
    inputMode?: "email" | "search" | "text" | "tel" | "url" | "none" | "numeric" | "decimal" | "password" | undefined
    className?: string;
    autoFocus?: boolean;
    placeholder?: string;
    errorMessage?: string;
    error?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    children: ReactNode;
    autoComplete?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const DecoratedInput: FC<InputProps> = ({ id, tabIndex, label, name, inputMode, className, autoFocus, placeholder, errorMessage, error, disabled, helperText, children, autoComplete, onChange }: InputProps) => {
    return (
        <div className="input__container">
            <InputLabel className="input__label" htmlFor={id}>{label}</InputLabel>
            <div className="input__wrapper">
                <input type={inputMode} />
            </div>

        </div>
    )
}

export default DecoratedInput