import React from 'react'
// import { Helmet } from "react-helmet-async"
import { Helmet } from 'react-helmet';


const Title = ({ title = "Chat App", descripton = "This is a chat app developed by Amit Gupta" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={descripton} />
    </Helmet>
  );
}

export default Title
