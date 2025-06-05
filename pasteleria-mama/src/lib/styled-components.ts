import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #e91e63;
    --primary-dark: #c2185b;
    --text-color: #333;
    --background-color: #fff;
  }
`;

// Configuración para asegurar nombres de clase consistentes
export const styledComponentsConfig = {
  ssr: true,
  displayName: true,
  preprocess: false,
  disableCSSOMInjection: true,
}; 