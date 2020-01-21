import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'

const StyledMenu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(255,255,255, 0.8);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 51;

  @media (max-width: 576px) {
    background: rgba(255,255,255, 0.95);
    padding: 0;
    width: 100%;
    }

  a {
    &:first-child {
        margin-top: 5rem;
    }
    
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 3rem;
      text-align: center;
    }

    &:hover {
      /* color: #343078; */
    }
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
        <Link to="/" onClick={() => setOpen(!open)}>Home</Link>
        <Link to="/pool-installs" onClick={() => setOpen(!open)}>Our Work</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact" onClick={() => setOpen(!open)}>Contact Us</Link>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 52;


  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    /* background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'}; */
    background: ${({ black, open }) => black ? "black" : open ? "black" : "white"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ black, open, setOpen }) => {
  return (
    <StyledBurger black={black} style={{color: 'black'}} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

// const useOnClickOutside = (ref, handler) => {
//     React.useEffect(() => {
//       const listener = event => {
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener('mousedown', listener);
  
//       return () => {
//         document.removeEventListener('mousedown', listener);
//       };
//     },
//     [ref, handler],
//     );
//   };
  


const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node} style={{}}>
        <Burger black={props.black} open={open} setOpen={setOpen} />
        <Menu style={{zIndex: "1000"}} open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}

export default NavBar