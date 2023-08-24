import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/home/logo.png'
import login from '../../../../public/images/home/login.png'

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsHeaderFixed(window.scrollY > 50);
      };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className={`header-bottom ${isHeaderFixed ? "sticky-header" : ""}`}>
        <div className="container">
          <div className="header-bottom-content">
            <Link href="/" className="logo">
              <Image  priority={true} 
                src={logo}
                // width={195}
                // height={36}
                alt="Squaddeck Logo"
              />
            </Link>
            <nav className="main-nav">
              <ul className="nav-list">
                <li className="nav-item menu-item-has-children">
                  <Link href="/features" className="nav-link">
                    <span>Features</span>
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.878632 0.602997L5.28656 5.01092L9.69449 0.602997"
                        stroke="var(--color--secondary)"
                        strokeWidth="1.10198"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Guardian and Player Management</a>
                    </li>
                    <li>
                      <a href="#">Responsive websites & Custom CMS</a>
                    </li>
                    <li>
                      <a href="#">Android/IOS Supported Smart App</a>
                    </li>
                    <li>
                      <a href="#">Trainers and Team Management</a>
                    </li>
                    <li>
                      <a href="#">Multiple Sports and Club Management</a>
                    </li>
                    <li>
                      <a href="#">Sports Event & Schedule Maker</a>
                    </li>
                    <li>
                      <a href="#">Realtime Chat & Notification</a>
                    </li>
                    <li>
                      <a href="#">eCommerce with Sales Tracking</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item menu-item-has-children">
                  <Link href="/sports" className="nav-link">
                    <span>Sports</span>
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.878632 0.602997L5.28656 5.01092L9.69449 0.602997"
                        stroke="#162A73"
                        strokeWidth="1.10198"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/auth/login" className="login-btn">
                    <Image  priority={true}  src={login} alt="Login" />
                    <span>Login</span>
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="btn-common btn-primary">
                    <span>Register</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="btn-common btn-secondary">
                    <span>Book A Demo</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
