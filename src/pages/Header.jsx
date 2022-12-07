import { useState } from 'react';
import {
  Camera,
  ChevronDown,
  Clock,
  GearFill,
  List,
  LockFill,
  Mic,
  PersonCircle,
  Search,
  ThreeDots,
  PersonFillGear,
  ShieldLockFill,
  ChatLeftFill,
  HouseDoorFill,
} from 'react-bootstrap-icons';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Slider from 'react-slick';

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
      <div className="menuList">
        <div className="menuListSub">
          <span style={{ marginRight: 15, color: 'gray ' }}>
            <PersonFillGear width={15} height={15} />
          </span>
          <p>My Bing</p>
        </div>
      </div>
      <div className="menuList">
        <div className="menuListSub">
          <span style={{ marginRight: 15, color: 'gray ' }}>
            <ShieldLockFill width={15} height={15} />
          </span>
          <p>Privacy</p>
        </div>
      </div>
      <div className="menuList">
        <div className="menuListSub">
          <span style={{ marginRight: 15, color: 'gray ' }}>
            <ChatLeftFill width={15} height={15} />
          </span>
          <p>Feedback</p>
        </div>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="menuList">
              <div className="menuListSub">
                <div style={{ marginRight: 15, color: 'gray ' }}>
                  <HouseDoorFill width={15} height={15} />
                </div>
                <p>Customize</p>
              </div>
              {/* <div>
                <span style={{ color: 'gray ' }}>
                  <ChevronDown width={15} height={15} />
                </span>
              </div> */}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="toggleMenu">
              <div>Show menu bar</div>
              <Form>
                <Form.Check type="switch" id="custom-switch" />
              </Form>
            </div>
            <div className="toggleMenu">
              <div>Show news and interests</div>
              <Form>
                <Form.Check type="switch" id="custom-switch" />
              </Form>
            </div>
            <div className="toggleMenu">
              <div>Show homepage image</div>
              <Form>
                <Form.Check type="switch" id="custom-switch" />
              </Form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
);
const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

          <ul className="searchBarItems">
            <li>
              <Mic color="#007DAA" />
            </li>
            <li>
              <Camera color="#007DAA" />
            </li>
            <li>
              <Search color="#007DAA" />
            </li>
          </ul>
        </div>
      </main>

      <div className="carousel">
        <Slider {...settings} className="slickContainer">
          <div className="carouselContainer">
            <div className="carousel1">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel2">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel3">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel4">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel5">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel6">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel7">
              <div className="carouselCard">
                <h3>Bengalure</h3>
                <img src="/couple.jpg" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
