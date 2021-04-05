
import style from './ScrollUp.module.scss'
import { useEffect, useState } from 'react';
import sprite from '../utils/symbol-defs.svg';

const ScrollUp = () => {

    const [state, setstate] = useState(false)
    
    useEffect(() => {
        document.addEventListener('scroll',trackScroll)
        function trackScroll() {
            if (window.pageYOffset > 0) {
                setstate(true)
            }
            else { setstate(false) }           
        } 
        return () => document.removeEventListener('scroll',trackScroll);       
    }, [])
    
    
    
    function ScrollUp() {
        let scrollHedth = window.pageYOffset;
     
     
        const upscrollFunc = setInterval(function () { if (scrollHedth > 0) { window.scroll(0, scrollHedth -= 20)} else{ clearInterval(upscrollFunc)} });
    }
   
   
    return (
        
        state && <a className={style.scroll} href="#top"
            onClick={ScrollUp}>
                <svg className={style.scrollIcon}>
                <use href={`${sprite}#icon-arrow-up`}></use>
                </svg>
            </a>        
    )    
}
export default ScrollUp
