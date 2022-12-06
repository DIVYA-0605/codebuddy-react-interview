import { useState } from 'react';
import {
  ThreeDots,
  List,
  GearFill,
  PersonCircle,
  Search,
  Mic,
  Camera,
  ChevronDown,
  LockFill,
  Clock,
} from 'react-bootstrap-icons';

const AccountMenu = () => (
  <div className="hamburger">
    <div className="menu">
      <div className="menuList">
        <div className="menuListSub">
          <span style={{ marginRight: 15, color: 'gray ' }}>
            <GearFill width={15} height={15} />
          </span>
          <p>Setting</p>
        </div>
        <div>
          <span style={{ color: 'gray ' }}>
            <ChevronDown width={15} height={15} />
          </span>
        </div>
      </div>
      <div className="menuList">
        <div className="menuListSub2">
          <span style={{ marginRight: 15, color: 'gray ' }}>
            <LockFill width={15} height={15} />
          </span>
          <p>SafeSearch</p>
        </div>
        <div>
          <p>Moderate</p>
        </div>
      </div>
      <div className="menuList">
        <div className="menuListSub">
          <span style={{ marginRight: 15, color: 'gray ' }}>
            <Clock width={15} height={15} />
          </span>
          <p>Search</p>
        </div>
      </div>
    </div>
  </div>
);
const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  return (
    <div>
      <header className="headerContainer">
        <div className="headerLogo">
          <img src="/MicrosoftBingLogo.png" alt="" />
          <ul className="headerList">
            <li>Images</li>
            <li>Videos</li>
            <li>Maps</li>
            <li>
              <ThreeDots width={25} height={25} />
            </li>
          </ul>
        </div>

        <div className="headerSign">
          <ul>
            <li>
              Sign in{' '}
              <span style={{ marginLeft: 6 }}>
                <PersonCircle width={30} height={30} />
              </span>
            </li>

            <li>
              <List
                width={25}
                height={25}
                style={{ cursor: 'pointer' }}
                onClick={() => setShowAccountMenu(!showAccountMenu)}
              />
              <div>{showAccountMenu && <AccountMenu />}</div>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="searchBar">
          <input type="text" />

          <ul>
            <li>
              <Mic color="#007DAA" width={25} height={25} />
            </li>
            <li>
              <Camera color="#007DAA" width={25} height={25} />
            </li>
            <li>
              <Search color="#007DAA" width={25} height={25} />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Header;
