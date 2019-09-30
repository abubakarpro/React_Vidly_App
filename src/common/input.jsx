import React from 'react'


const Input = (props) => {
    const { name, label, onChange, value, type, error } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input

                value={value}
                onChange={onChange}
                name={name}
                type={type}
                id={name}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;