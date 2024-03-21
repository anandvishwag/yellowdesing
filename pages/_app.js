import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import MainLayout from '../components/layouts/MainLayout';


const layouts = {
  Main: MainLayout,
};

const MyApp = ({Component, pageProps}) =>{
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
export default MyApp;
