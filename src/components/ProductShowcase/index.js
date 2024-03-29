import React, {useState, useRef, useEffect} from 'react'
import "./productShowcase.css";

const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAnimation = (e) => {
        if(e[0].isIntersecting){
            setShowAnimation(true);
        }
    };
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if(!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };

    });

  return (
    <div className={`product-showcase ${showAnimation?'scale-in-bottom':''}`}
        ref={ref}>
        {showAnimation && (
            <div className='showcase-wrapper'>
                <img className='showcase-ui showcase-mockup-1'
                    src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt='product left 2'/>
                <img className='showcase-ui showcase-mockup-2'
                    src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt='product left 1'/>
                <img className='showcase-ui showcase-mockup-3'
                    src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt='product center'/>
                <img className='showcase-ui showcase-mockup-4'
                    src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt='product right 1'/>
                <img className='showcase-ui showcase-mockup-5'
                    src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt='product right 2'/>
            </div>
        )}
    </div>
  )
}

export default ProductShowcase