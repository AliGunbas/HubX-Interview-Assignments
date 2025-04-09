import "./assets/styles/style.css"
import { Slider } from "./components/Slider";
import phoneImg_1 from "./assets/img/phone-1.png"
import phoneImg_2 from "./assets/img/phone-2.png"
import phoneImg_2_1 from "./assets/img/phone-2-1.png"
import phoneImg_2_2 from "./assets/img/phone-2-2.png"
import phoneImg_3 from "./assets/img/phone-3.png"
import phoneImg_3_1 from "./assets/img/phone-3-1.png"
import phoneImg_3_2 from "./assets/img/phone-3-2.png"
import phoneImg_3_3 from "./assets/img/phone-3-3.png"
import phoneImg_4 from "./assets/img/phone-4.png"
import phoneImg_4_1 from "./assets/img/phone-4-1.png"
import phoneImg_4_2 from "./assets/img/phone-4-2.png"
import phoneImg_5 from "./assets/img/phone-5.png"
import phoneImg_5_1 from "./assets/img/phone-5-1.png"
import phoneImg_5_2 from "./assets/img/phone-5-2.png"
import phoneImg_5_3 from "./assets/img/phone-5-3.png"
import phoneImg_5_4 from "./assets/img/phone-5-4.png"

import { SliderIcon_1 } from "./components/svg/SliderIcon_1";
import { SliderIcon_2 } from "./components/svg/SliderIcon_2";
import { SliderIcon_3 } from "./components/svg/SliderIcon_3";
import { SliderIcon_4 } from "./components/svg/SliderIcon_4";
import { SliderIcon_5 } from "./components/svg/SliderIcon_5";
import { SliderPage } from "./types";


export function App() {

  const sliderPages:SliderPage[] = [
    { id: 1, imgArr: [phoneImg_1], icon: SliderIcon_1, title: "document scanner", h1: "Scan with Ease", p: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format." },
    { id: 2, imgArr: [phoneImg_2, phoneImg_2_1, phoneImg_2_2], icon: SliderIcon_2, title: "sign & stamp", h1: "One-Tap Focus", p: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!" },
    { id: 3, imgArr: [phoneImg_3, phoneImg_3_1, phoneImg_3_2, phoneImg_3_3], icon: SliderIcon_3, title: "batch scanning", h1: "Multiple Page Scan", p: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document." },
    { id: 4, imgArr: [phoneImg_4, phoneImg_4_1, phoneImg_4_2], icon: SliderIcon_4, title: "advanced filters", h1: "Unique filters", p: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters." },
    { id: 5, imgArr: [phoneImg_5, phoneImg_5_1, phoneImg_5_2, phoneImg_5_3, phoneImg_5_4], icon: SliderIcon_5, title: "export & share", h1: "All-Round Conversion", p: "Export your scans as PDF,JPG,ZIP,TXT and Word." },
  ]
  
  return (
    <>
      <main>
        <Slider
          sliderPages={sliderPages}
        />
      </main>
    </>
  );
}
