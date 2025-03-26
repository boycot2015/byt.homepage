import { useTranslation } from "next-i18next";
import Container from "components/services/widget/container";
import Script from 'next/script';
import { useState, useEffect } from "react";
// import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
    const { widget } = service;
    const { playServer: server = 'netease', playtheme = '#2980b9', playType: type = 'playlist', playId: id = '7360465359', ...reset } = widget;
    // const [fixed, setFixed] = useState(false)
    // useEffect(() => {
    // }, [])
    // document.querySelector('#inner_wrapper')?.addEventListener('scroll', (e) => {
    //   setFixed(e.target.scrollTop > 100);
    // })
    return (<Container service={service}>
      <>
        <Script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js" />
      </>
      <meting-js {...{ ...reset, server, type, id, theme: playtheme }} autoplay={true}></meting-js>
  </Container>)
}