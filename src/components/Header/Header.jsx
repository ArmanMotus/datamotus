import React, {useRef, useEffect} from 'react'
import logo from '../../../src/logo-cdr.svg'
import './header.css'
const nav__links =[
    {
        path: '#/datamotus',
        display: 'Home'
    },
    
    {
        path: '#/projects',
        display: 'Projects'
    },

    {
        path: '#/about',
        display: 'About'
    },
    
    {
        path: '#/services',
        display: 'Services'
    },

    {
        path: '#/trainings',
        display: 'Trainings'
    },
    
    
    {
        path: '#/blog',
        display: 'Blog'
    },

    {
        path: '#/contact',
        display: 'Contact us'
    },
]

const Header = ({theme, toggleTheme}) => {

  const headerRef =useRef(null);  
  
  const menuRef = useRef(null);


  const headerFunc = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('header__shrink');
    } else {
        headerRef.current.classList.remove('header__shrink');

    }
  };

  useEffect(()=>{
    window.addEventListener('scroll',headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = (e) =>{
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0, 
      top: location -80,
    });
};

const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  

    
  
  return(
    <header className='header' ref={headerRef}>
        <div className='container'>
            <div className='nav__wrapper'>
                <div className='image'>
                    <img src={logo} width={150} height={100}/>
                </div>

                {/* navigation */}
                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                    
                    <ul className='menu'>
                        {
                        nav__links.map((item,index)=>(
                            <li className='menu__item' key={index}>
                                <a href={item.path} className="menu__link">
                                {item.display}
                                </a>                          
                                </li>
                        ))
                    }
                    </ul>
                </div>
            
                 {/* light mode */}  
                <div className="light__mode">
                    <span onClick={toggleTheme}>
                    {
                       theme ==='light-theme' ? (
                       <span>
                        <i class='ri-moon-line'></i>Dark
                        </span>
                       ) : (
                       <span>

                        <i class="ri-sun-line"></i> Light 
                        </span>
                    )}
               </span>
                
                </div>

                <span className="mobile_menu" onClick={toggleMenu}> <i class="ri-menu-line"></i> 
                </span>
            </div>  
          </div>  
        
    </header>
  )
}

export default Header
