import React from 'react'
import { StyledMInput, StyledMMultilineInput } from './styles'

export const MInput = ({ height, resize, padding, isMultiline, onChange, value, focusBg, focusBorderColor, width, radius, placeholder, borderColor, bg }) => {
    if (isMultiline) return (
        <StyledMMultilineInput
            bg={bg}
            focusBg={focusBg}
            borderColor={borderColor}
            focusBorderColor={focusBorderColor}
            width={width}
            resize={resize}
            padding={padding}
            radius={radius}
            height={height}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        ></StyledMMultilineInput>
    )

    return (
        <StyledMInput
            bg={bg}
            focusBg={focusBg}
            borderColor={borderColor}
            focusBorderColor={focusBorderColor}
            width={width}
            padding={padding}
            radius={radius}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}