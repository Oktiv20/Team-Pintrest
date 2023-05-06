/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { AuthProvider } from '../utils/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';
// import PinterestLayout from '../components/PinterestLayout';
// import PinCard from '../components/PinCard';

function MyApp({ Component, pageProps }) {
  // const styles = {
  //   pin_containter: {
  //     margin: 0,
  //     padding: 0,
  //     width: '80vw',
  //     background: 'black',
  //     position: 'absolute',
  //     left: '50%',
  //     transform: 'translateX(-50%)',
  //     display: 'gird',
  //     gridTemplateColumn: 'repeat(auto-fill, 250px)',
  //     gridAutoRows: '10px',
  //     justifyContent: 'center',
  //   },
  // };

  return (
    <>
      {/* <div style={styles.pin_containter}>
        <>
          <PinCard />
        </>
      </div>
      <PinterestLayout /> */}
      <AuthProvider> {/* gives children components access to user and auth methods */}
        <ViewDirectorBasedOnUserAuthStatus
        // if status is pending === loading
        // if status is logged in === view app
        // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </>
  );
}

export default MyApp;
