
import style from './ScrollUp.module.scss'
import { useEffect, useState } from 'react';


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
    }, [])
    
    
    
    function ScrollUp() {
        let scrollHedth = window.pageYOffset;
     
     
        const upscrollFunc = setInterval(function () { if (scrollHedth > 0) { window.scroll(0, scrollHedth -= 20)} else{ clearInterval(upscrollFunc)} }, 00);
    }
   
   
    return (
        
        state && <a className={style.scroll} href="#top"
            onClick={ScrollUp}>&#8896;</a>        
    )    
}
export default ScrollUp
