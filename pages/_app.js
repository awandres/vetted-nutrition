import '../styles/global.css'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
  import('bootstrap/dist/js/bootstrap');
}, []);

  return <Component {...pageProps} />
}
