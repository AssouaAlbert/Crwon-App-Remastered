import { Routes, Route, useRoutes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from "./components/navigation/navigation.component";
import Shop from './routes/shop/shop.component';
import React from 'react';

const App = () => {
  const endpoints = useRoutes([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          index: true,
          element: < Home />,
        },
        {
          path:"shop",
          index: true,
          element: < Shop />,
        }
      ]
    },

  ])
  return (
    <React.Fragment>
    {endpoints}
    </React.Fragment>
    // <Routes>
    //   <Route path="/" element={<Navigation />}>
    //     <Route index element={<Home />} />
    //     <Route path="shop" element={<Shop />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
