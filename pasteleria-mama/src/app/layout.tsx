import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './registry';
import {
  Nav,
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  Footer,
  FooterContainer,
  FooterGrid,
  FooterSection,
  FooterBottom
} from './layout.styles';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pastelería Mama - Dulces momentos, sabores inolvidables",
  description: "Pastelería artesanal con los mejores postres y dulces tradicionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Nav>
            <NavContainer>
              <NavContent>
                <Logo href="/">
                  Pastelería Mama
                </Logo>
                <NavLinks>
                  <NavLink href="/productos">Productos</NavLink>
                  <NavLink href="/nosotros">Nosotros</NavLink>
                  <NavLink href="/contacto">Contacto</NavLink>
                </NavLinks>
              </NavContent>
            </NavContainer>
          </Nav>

          {children}

          <Footer>
            <FooterContainer>
              <FooterGrid>
                <FooterSection>
                  <h3>Pastelería Mama</h3>
                  <p>
                    Creando dulces momentos desde 2010
                  </p>
                </FooterSection>
                <FooterSection>
                  <h3>Contacto</h3>
                  <p>
                    Dirección: Calle Principal #123<br />
                    Teléfono: (123) 456-7890<br />
                    Email: info@pasteleriamama.com
                  </p>
                </FooterSection>
                <FooterSection>
                  <h3>Horario</h3>
                  <p>
                    Lunes - Viernes: 8:00 AM - 8:00 PM<br />
                    Sábado: 8:00 AM - 6:00 PM<br />
                    Domingo: 9:00 AM - 2:00 PM
                  </p>
                </FooterSection>
              </FooterGrid>
              <FooterBottom>
                <p>&copy; {new Date().getFullYear()} Pastelería Mama. Todos los derechos reservados.</p>
              </FooterBottom>
            </FooterContainer>
          </Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
