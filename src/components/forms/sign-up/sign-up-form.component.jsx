import {Input} from '../inputs/inputs.component';
import { Button } from '../../button/button.component';

const Form = ({handleSubmit, formField, setFormField}) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }

    return (<div className="">
        <form onSubmit={handleSubmit}>
            <Input label={true} required={true} id="displayName" placeholder="Display Name"  type="text" changeHandler={handleChange}  formField={formField}/>
            <Input label={true} required={true} id="email" placeholder="Email"  type="email" changeHandler={handleChange}  formField={formField}/>
            <Input label={true} required={true} id="password" placeholder="Password"  type="password" changeHandler={handleChange}  formField={formField}/>
            <Input label={true} required={true} id="confirmpassword" placeholder="Confirm Password"  type="password" changeHandler={handleChange}  formField={formField}/>
            <Button  type="submit" > Submit </Button>
        </form>
    </div>)
}

export {Form};