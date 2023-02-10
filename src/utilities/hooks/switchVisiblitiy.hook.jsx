import {  useEffect, useRef, useContext } from 'react';
import { CartDropDownContext } from '../../components/context/cart-dropdown/cart-drop-down.context';


export default function SwithVisibility(context) {
    const { setDropdown } = useContext(context)
    const ref = useRef(null);
    function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setDropdown(prev => false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref};
}