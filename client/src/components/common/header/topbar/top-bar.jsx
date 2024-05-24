import "./top-bar.scss";

import React from "react";

import PageContentWrapper from "components/common/page-content-wrapper/page-content-wrapper";
import { phoneIcon, mailIcon } from "../../../icons/font-awesome-icons";
import SocialIcons from "./social-icons/social-icons";
import ContactBox from "./contact-box/contact-box";

const email = 'Email: RSA@GMAIL.COM';
const phone = 'Phone: +919876543210';

const TopBar = () => (
  <section className="top-bar">
    <PageContentWrapper className="top-bar-wrapper">
      <article className="contacts-container">
        <ContactBox
          icon={phoneIcon}
          text={phone} />
        <ContactBox
          icon={mailIcon}
          text={email}
        />
      </article>
      <SocialIcons />
    </PageContentWrapper>
  </section>
);

export default TopBar;
