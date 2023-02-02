import { useState } from 'react';
const defaultFormData = {
    displayname: '',
    email: '',
    password: '',
    confirmpassword: ''
}
console.log('defaultFormData:', defaultFormData)

export const SignUpForm = () => {
const [formField, setFormField] =  useState(defaultFormData);
const handleChange = (event) => {
    const {name, value} = event.target;
    setFormField({...formField, [name]:value})
}
    return (
        <div className="">
            <form onSubmit={() => { }}>
                <label htmlFor="display-name">Displayed Name</label>
                <input type="text" placeholder="Displayed Name" required id="display-name" onChange={handleChange} name="displayname" value={formField.displayname}/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" required id="email" name="email" onChange={handleChange} value={formField.email}/>
                <label htmlFor="new-password">Password</label>
                <input type="password" placeholder="Password" required id="new-password" onChange={handleChange} name="password" value={formField.password} autoComplete="section-red shipping postal-code"/>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" required id="confirm-password" onChange={handleChange} name="confirmpassword" autoComplete="section-red shipping postal-code" value={formField.confirmpassword} />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}