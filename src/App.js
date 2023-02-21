import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from "./components/navigation/navigation.component";
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import CheckOut from './routes/check-out/checkout.compoenent';

import { createUserDocumentFromAuth } from './utilities/firebase/firebase.database';
import { onAuthStateChangedListener } from './utilities/firebase/firebase.auth';
import { setCurrentUser } from './redux/reducer/user/user.utils';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      //! If a user is logged in/ created, then create or get the user profile from firestore
      if (user) { createUserDocumentFromAuth(user); }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
