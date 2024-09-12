import icon from '../../assets/IconBlack.svg';
import Image from 'next/image';

export default function Navbar() {
    return (
        <main>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">
                <Image
                  priority
                  src={icon}
                  alt="Follow us on Twitter"
                />
                <span className='org-name'>blockhouse.app</span>
              </a>
            </div>
          </nav>
        </main>
      );
}