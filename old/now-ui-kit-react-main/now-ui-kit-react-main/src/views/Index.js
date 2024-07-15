import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Tabs from "./index-sections/Tabs.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import Download from "./index-sections/Download.js";

import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />{/* 완 */}
      <div className="wrapper">
        <IndexHeader />{/* 완 */}
        <div className="main">
          {/* <BasicElements /> */}
          {/* <Navbars /> */}
          <NucleoIcons />{/* 완 */}
          <Download />{/* 완 */}
          <Tabs />{/* 완 */}
{/*           <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <CompleteExamples />
          <SignUp />
          <Examples /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
