/* eslint-disable react/no-unescaped-entities */
import FileDropZone from "../common/FileDropZone";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SidebarMapping from "../modals/SidebarMapping";
import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t } = useTranslation();

  const handleFilesDropped = (files) => {
    // Do something with the dropped files
    console.log(files);
  };
  return (
    <>
      <section className="relative min-h-screen bg-yellow">
        <div className="absolute top-[50%] translate-y-[-50%] z-50">
          <SidebarMapping />
        </div>
        <FileDropZone onFilesDropped={handleFilesDropped}>
          <Header />
          <div>
            <div className="flex flex-col lg:gap-y-2 3xl:gap-y-10 ab items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="-space-y-8 text-right ">
                <h1 className="text-[32px]  lg:text-[51px] tracking-[2px] ">
                {t('hero.letsDo')}
                  {/* LET'S DO */}
                </h1>
                <h1 className="text-[92px] lg:text-[152px] tracking-[2px]">
                  {" "}
                {t('hero.this')}

                  {/* THIS */}
                </h1>
              </div>
              <p className=" text-[10px]  lg:tracking-[2px] text-center">
                {/* UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
                 */}
                  {t('hero.upload')}
              </p>
            </div>
          </div>
          <Footer />
        </FileDropZone>
      </section>
    </>
  );
};

export default Hero;
