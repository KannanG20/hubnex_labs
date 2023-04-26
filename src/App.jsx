import React, { Suspense, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CircularProgress } from '@mui/material';

import Root from './routes/Root'
import Loader from './components/loader/Loader'
import './App.css'


// Services Dropdown pages
const IOT = React.lazy(() => import('./pages/services/IOT'))
const AIML = React.lazy(() => import('./pages/services/AIML'))
const CloudServices = React.lazy(() => import('./pages/services/CloudServices'))
const SoftwareTesting = React.lazy(() => import('./pages/services/SoftwareTesting'))
const DigitalMarketing = React.lazy(() => import('./pages/services/DigitalMarketing'))

// Industries Dropdown pages
const Communication = React.lazy(() => import('./pages/industries/Communication'))
const Hospitality = React.lazy(() => import('./pages/industries/Hospitality'))
const Logistics = React.lazy(() => import('./pages/industries/Logistics'))
const PublicSector = React.lazy(() => import('./pages/industries/PublicSector'))
const Retail = React.lazy(() => import('./pages/industries/Retail'))
const Travel = React.lazy(() => import('./pages/industries/Travel'))

// Hubnex pages (public)
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Services = React.lazy(() => import('./pages/Services'))
const Industries = React.lazy(() => import('./pages/Industries'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Startup = React.lazy(() => import('./pages/Startup'))

// Admin Panel (Private Pages)!    
const ManageRoles = React.lazy(() => import('./components/adminpage/ManageRoles'))
const AddUser = React.lazy(() => import('./components/adminpage/AddUser'))
const EditUser = React.lazy(() => import('./components/adminpage/EditUser'))
const Applications = React.lazy(() => import('./components/adminpage/Applications'))
const Invest = React.lazy(() => import('./components/adminpage/Invest'))
const Terms = React.lazy(() => import('./components/adminpage/Terms'))
const Dataprotection = React.lazy(() => import('./components/adminpage/Dataprotection'))
const Privacy = React.lazy(() => import('./components/adminpage/Privacy'))
const AdminContact = React.lazy(() => import('./components/adminpage/Contact'))
const ProtectedRoute = React.lazy(() => import('./components/adminpage/ProtectedRoute'))
const TermsandConditions = React.lazy(() => import('./components/cms/TermsandConditions'))
const DataProtection = React.lazy(() => import('./components/cms/DataProtection'))
const PrivacyPolicy = React.lazy(() => import('./components/cms/PrivacyPolicy'))
const ManagePartners = React.lazy(() => import('./components/adminpage/ManagePartners'))


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const images = [
      './assets/aboutLander.png',
      './assets/abouts.png',
      './assets/arrowR.png',
      './assets/backgroundVector.png',
      './assets/balloon.png',
      './assets/brandImage.png',
      './assets/chorus.png',
      './assets/close.png',
      './assets/footer.png',
      './assets/girlImg.png',
      './assets/hamMenu.png',
      './assets/hero.png',
      './assets/industryLander.png',
      './assets/iphoneTransparent.png',
      './assets/lander_image.jpg',
      './assets/landerImage1.png',
      './assets/logo.png',
      './assets/manArt.png',
      './assets/menuUp.png',
      './assets/nasa.png',
      './assets/Our-Mission.png.png',
      './assets/Our-Philosophy.png.png',
      './assets/Our-Strategy.png.png',
      './assets/Our-Vision.png.png',
      './assets/pantera.png',
      './assets/Plus.png',
      './assets/reddit.png',
      './assets/search_icon.png',
      './assets/service1.png',
      './assets/service2.png',
      './assets/service3.png',
      './assets/service4.png',
      './assets/serviceMan.png',
      './assets/shakehand.png',
      './assets/Tata Consultancy Services - png 0.png',
      './assets/testimo.png',
      './assets/thano.png',
      './assets/user1.png',
      './assets/vector2.png',
      './assets/Xmark.png'
    ];

    cacheImages(images);
  }, [])

  const cacheImages = async (srcArr) => {
    const promises = await srcArr.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      })
    })
    await Promise.all(promises);
    setLoading(false);
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: '/',
            element:
              <Suspense fallback={<Loader />}><Home /></Suspense>
          },
          {
            path: '/about',
            element: <Suspense fallback={<Loader />}><About /></Suspense>
          },
          {
            path: '/service',
            element: <Suspense fallback={<Loader />}><Services /></Suspense>,
          },
          {
            path: '/service/ai-ml',
            element: <Suspense fallback={<Loader />}><AIML /></Suspense>
          },
          {
            path: '/service/cloud-services',
            element: <Suspense fallback={<Loader />}><CloudServices /></Suspense>
          },
          {
            path: '/service/digital-marketing',
            element: <Suspense fallback={<Loader />}><DigitalMarketing /></Suspense>
          },
          {
            path: '/service/iot',
            element: <Suspense fallback={<Loader />}><IOT /></Suspense>
          },
          {
            path: '/service/software-testing',
            element: <Suspense fallback={<Loader />}><SoftwareTesting /></Suspense>
          },
          {
            path: '/industries',
            element: <Suspense fallback={<Loader />}><Industries /></Suspense>,
          },
          {
            path: '/industries/communication',
            element: <Suspense fallback={<Loader />}><Communication /></Suspense>
          },
          {
            path: '/industries/hospitality',
            element: <Suspense fallback={<Loader />}><Hospitality /></Suspense>
          },
          {
            path: '/industries/logistics',
            element: <Suspense fallback={<Loader />}><Logistics /></Suspense>
          },
          {
            path: '/industries/public-Sector',
            element: <Suspense fallback={<Loader />}><PublicSector /></Suspense>
          },
          {
            path: '/industries/retail',
            element: <Suspense fallback={<Loader />}><Retail /></Suspense>
          },
          {
            path: '/industries/travel',
            element: <Suspense fallback={<Loader />}><Travel /></Suspense>
          },

          {
            path: '/contact',
            element: <Suspense fallback={<Loader />}><Contact /></Suspense>
          },
          {
            path: '/terms-and-conditions',
            element: <Suspense fallback={<Loader />}><TermsandConditions /></Suspense>
          },
          {
            path: '/data-protection',
            element: <Suspense fallback={<Loader />}><DataProtection /></Suspense>
          },
          {
            path: '/privacy-policy',
            element: <Suspense fallback={<Loader />}><PrivacyPolicy /></Suspense>
          },
          {
            path: '/startup-program',
            element: <Suspense fallback={<Loader />}><Startup /></Suspense>
          },
          {
            path: '/admin',
            element: <Suspense fallback={<Loader />}><ProtectedRoute /></Suspense>,
            children: [
              {
                path: '/admin',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><Dataprotection /></Suspense>
              },
              {
                path: '/admin/data-protection',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><Dataprotection /></Suspense>
              },
              {
                path: '/admin/privacy-policy',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><Privacy /></Suspense>
              },
              {
                path: '/admin/terms-and-conditions',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><Terms /></Suspense>
              },
              {
                path: '/admin/forms/invest',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><Invest /></Suspense>
              },
              {
                path: '/admin/forms/contact',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><AdminContact /></Suspense>
              },
              {
                path: '/admin/manage-roles',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><ManageRoles /></Suspense>
              },
              {
                path: '/admin/manage-roles/add-user',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><AddUser /></Suspense>
              },
              {
                path: '/admin/manage-roles/edit-user/:id',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><EditUser /></Suspense>
              },
              {
                path: '/admin/manage-partners',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><ManagePartners /></Suspense>
              },
              {
                path: '/admin/application',
                element: <Suspense fallback={<div className=' h-full w-full justify-center items-center flex bg-transparent'><CircularProgress /></div>}><Applications /></Suspense>
              },
            ]
          },
        ],
      },
    ]
  );

  return (
    <div>
      {loading ?
        <Loader />
        :
        <RouterProvider router={router} />
      }
    </div>
  )
}

export default App
