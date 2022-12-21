import React, { ReactNode } from 'react'

interface InputProps {
    tabIndex?: number;
    label: string;
    name: string;
    inputMode?: "email" | "search" | "text" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined
    className?: string;
    autoFocus?: boolean;
    placeholder?: string;
    errorMessage?: string;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    children: ReactNode
}

function DecoratedInput() {
    return (
        <div>DecoratedInput</div>
    )
}

export default DecoratedInput