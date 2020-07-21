import {Helmet} from "react-helmet";
import * as React from "react";
import BrowserConfig from '@assets/browserconfig.xml';
import SiteWebmanifest from '@assets/site.webmanifest';
import AndroidChrome192 from '@assets/favicons/android-chrome-192x192.png';
import AndroidChrome512 from '@assets/favicons/android-chrome-512x512.png';
import AppleTouchIcon from '@assets/favicons/apple-touch-icon.png';
import Favicon16 from '@assets/favicons/favicon-16x16.png';
import Favicon32 from '@assets/favicons/favicon-32x32.png';
import MSTile from '@assets/favicons/mstile-150x150.png';
import SocialThumbnail from '@assets/social-thumbnail.jpg';
import SplashIpad from '@assets/splash/ipad.png';
import SplashIpadPro1 from '@assets/splash/ipadpro1.png';
import SplashIpadPro2 from '@assets/splash/ipadpro2.png';
import SplashIpadPro3 from '@assets/splash/ipadpro3.png';
import SplashIphone5 from '@assets/splash/iphone5.png';
import SplashIphone6 from '@assets/splash/iphone6.png';
import SplashIphonePlus from '@assets/splash/iphoneplus.png';
import SplashIphoneX from '@assets/splash/iphonex.png';
import SplashIphoneXr from '@assets/splash/iphonexr.png';
import SplashIphoneXsMax from '@assets/splash/iphonexsmax.png';

export const DocumentHead: React.FC = () => (
    <Helmet>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"/>
      <title>Fear.FM</title>
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon}/>
      {/*<link rel="icon" type="image/svg+xml" href={Favicon}/>*/}
      <link rel="icon" type="image/png" href={Favicon16} sizes="16x16"/>
      <link rel="icon" type="image/png" href={Favicon32} sizes="32x32"/>
      <link rel="icon" type="image/png" href={AndroidChrome192} sizes="192x192"/>
      <link rel="icon" type="image/png" href={AndroidChrome512} sizes="512x512"/>
      <link rel="manifest" href={SiteWebmanifest}/>
      {/*<link rel="mask-icon" href={SafariPinnedTab} color="#cb2d2e"/>*/}
      <link href={SplashIphone5}
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIphone6}
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIphonePlus}
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIphoneX}
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIphoneXr}
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIphoneXsMax}
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIpad}
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIpadPro1}
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIpadPro3}
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <link href={SplashIpadPro2}
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"/>
      <meta name="apple-mobile-web-app-title" content="Fear.FM"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="msapplication-config" content={BrowserConfig} />
      <meta name="msapplication-TileColor" content="#cb2d2e"/>
      <meta name="msapplication-TileImage" content={MSTile}/>
      <meta name="theme-color" content="#cb2d2e"/>
      <meta property="og:title" content="Fear.FM"/>
      <meta property="og:description" content="Be proud and listen loud."/>
      <meta property="og:image" content={SocialThumbnail}/>
      <meta property="og:url" content="https://fear.fm/"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@fearfm"/>
      <meta name="twitter:image:alt" content="Fear.FM logo on a cracked surface."/>
      <meta name="rating" content="General"/>
    </Helmet>
);
