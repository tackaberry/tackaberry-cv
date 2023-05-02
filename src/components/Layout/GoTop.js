import React from 'react'

const GoTop = ({scrollStepInPx, delayInMs}) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(0);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])
    
    const onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <div className={`go-top ${thePosition ? 'active' : ''}`} tabIndex={0} role = "button" onKeyDown={scrollToTop} onClick={scrollToTop}>
                <i className='bx bxs-up-arrow-alt'></i>
                <i className='bx bxs-up-arrow-alt'></i>
            </div>
        )
    }

    return (
        <>
            {renderGoTopIcon()}
        </>
    )
}

export default GoTop