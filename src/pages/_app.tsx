import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
// import Image from 'next/image';
import LogoImg from '../assets/logo.svg';
import Image from 'next/future/image';
import { Container, Header } from '../styles/pages/app';
globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="Logo Ignite Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
