'use client';

import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e91e63;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e91e63;
  }
`;

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    line-height: 1.6;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
  color: #ccc;
`; 