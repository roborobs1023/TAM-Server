import React from "react"
import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h3 className="form-title">
                {title}
            </h3>
            {children}
        </>
    )
}