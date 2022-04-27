import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import './selectStyle.css'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
    control: (styles) => ({
        ...styles,
        minWidth: 250,
        marginRight: 20,
        marginTop: -5,
    }),
}

const animatedComponents = makeAnimated();

const MySelect = () => (
    <Select
        isMulti
        options={options}
        theme={(theme) => ({
            ...theme,
            width: 300,
            marginRight: '23px',
            borderRadius: 0,
            colors: {
                ...theme.colors,
                primary25: 'rgba(102, 94, 91, 0.63)',
                primary: 'rgba(102, 94, 91, 1)',
            },
        })}
        styles={customStyles}
        components={animatedComponents}
        closeMenuOnSelect={false}
    />
)

export default MySelect;
