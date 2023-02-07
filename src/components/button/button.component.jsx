import './button.styles.scss'

export const Button = ({children, classname}) => {
    return (
        <button className={`${classname} button-container`}>
            {children}
        </button>
    )
}