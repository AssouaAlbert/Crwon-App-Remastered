import './button.styles.scss'

export const Button = ({children, classname, btnType, action}) => {
    return (
        <button type={btnType} onClick={action} className={`${classname} button-container`}>
            {children}
        </button>
    )
}