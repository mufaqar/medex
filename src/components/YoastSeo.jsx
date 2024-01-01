import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function YoastSeo(props) {
     const router = useRouter()
     
     const openGrap = {
       type: props.og_type,
       title: props.opengraphType,
       description: props.opengraphDescription,
       url: props.opengraphUrl,
       siteName: props.opengraphSiteName,
       images: [
         props.opengraphImage?.mediaItemUrl
           ? [...props.opengraphImage?.mediaItemUrl]
           : "https://www.medexworldwide.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.def051fe.png&w=640&q=75",
       ],
     };
   
     return (
       <NextSeo
         title={props.title}
         description={props.seo?.metaDesc || props.seo?.opengraphDescription}
         openGraph={openGrap}
         canonical={process.env.NEXT_PUBLIC_SITE_URL + `${router?.asPath}`}
       />
     );
   }