import { useTranslation } from "next-i18next";
import Container from "components/services/widget/container";
import Script from 'next/script';
// import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {

    const { widget } = service;
    const { playServer: server = 'netease', playType: type = 'playlist', playId: id = '7360465359' } = widget;

    // console.log(widget, 'meting');
    
    return (<Container service={service}>
        <>
          <Script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" />
          <Script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js" />
        </>
        <meting-js {...{ server, type, id }}></meting-js>
    </Container>)
}