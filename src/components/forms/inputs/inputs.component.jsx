import "../inputs/form-input.styles.scss";
export const Input = ({label, required, id, placeholder, type, changeHandler, formField}) => {
    return (
        <div className='group'>
            <input className='form-input' type={type} required={required} id={id} name={id} onChange={changeHandler} value={formField[id]} />
            {label && <label htmlFor={id} className={`${formField[id] ? 'shrink' : ''} form-input-label`}>{placeholder} </label>}
        </div>
    )
}