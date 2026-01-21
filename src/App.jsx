
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from './Utils/AuthRoute';
import { useUserContext } from './Context/userContex.jsx';
import Loader from './Components/Loader.jsx';

// Lazy loading pages
const Home = lazy(() => import('./Pages/Home.jsx'));
const Signup = lazy(() => import('./Pages/SignUp.jsx'));
const PageNotFound = lazy(() => import('./Components/PageNotFound.jsx'));


const App = () => {
  const { isAuth } = useUserContext();


  // let arr = [300, 8, 900, 400, 9];

  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = 0; j < arr.length - i - 1; j++) {

  //     console.log(arr[j]);
  //     console.log(arr[j+1]);
      
      // if (arr[j] > arr[j + 1]) {
      //   let temp = arr[j];
      //   arr[j] = arr[j + 1];
      //   arr[j + 1] = temp;
      // }
  //   }
  // }

  // console.log(arr); // Output: [8, 9, 300, 400, 900]

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AuthRoute isAuth={isAuth} />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route
            path='/signUp'
            element={
              <AuthRoute path='/' isAuth={!isAuth}>
                <Signup />
              </AuthRoute>
            }
          />




          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
