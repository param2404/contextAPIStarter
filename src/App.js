import { useRoutes } from 'react-router-dom';
import routes from './routes';
import useAuth from './hooks/useAuth';

function App() {
  const content = useRoutes(routes);
  const auth = useAuth();

  return (
      <>
        {auth.isInitialized ? content : <h1>Loading</h1>}
      </>
    // <RouterProvider
    //   router={routes}
    // />
    // <BrowserRouter>
    //   <Navbar />
    //   <div style={{ marginTop: '100px' }}>
    //     <Routes>
    //       <Route exact path="/" element={<Landing />} />
    //       <Route exact path="/aboutus" element={<About />} />
    //       <Route exact path="/properties" element={<Property />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </BrowserRouter>
  );
};

export default App;
