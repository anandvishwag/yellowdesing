import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import MainLayout from '../components/layouts/MainLayout';
import NextNProgress from 'nextjs-progressbar';

const layouts = {
  Main: MainLayout,
};

const MyApp = ({Component, pageProps}) =>{
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <>
     <NextNProgress color="#7A5E27" />
     <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
     
  )
}
export default MyApp;
