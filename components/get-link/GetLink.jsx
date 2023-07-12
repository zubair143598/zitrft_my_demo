/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Draggable from "../common/Draggable";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addFile } from "@/src/store/features/fileSlice";
import { formatBytes } from "@/lib/helper";
import { useTranslation } from "react-i18next";


const GetLink = () => {
  const { t } = useTranslation();

  const files = useSelector((state) => state.files.filesList);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // Trigger the file upload input
  };

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const uploadedFileDetails = uploadedFiles.map((file) => ({
      "name": file.name,
      "size": formatBytes(file.size),
      "extension": file.name.split(".").pop(),
    }));

    // dispatch(addFile(uploadedFileDetails)); // Dispatch the action with the uploadedFileDetails payload
  };
  return (
    <Draggable>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-[250px] h-[360px] lg:w-[314px] lg:h-[450px] 3xl:h-[489px] bg-black text-white rounded-xl absolute top-[50%] left-[200px] lg:left-[240px] translate-x-[-50%] translate-y-[-50%]"
      >
        {/* ADD ICON */}
        <div className="relative  ">
          <div className="absolute top-[-2px] left-[-1px]">
            <img
              src="/assets/AddIcon.png"
              alt="Add-Icon"
              className="w-[70px] lg:w-[111px] p-2   bg-yellow lg:p-6  cursor-pointer "
              onClick={handleFileUploadClick}
            />
          </div>
          <div className="absolute left-[75px] top-[10px] lg:left-[120px] flex flex-col  lg:top-[25px] ">
            <p
              className="text-yellow text-[10px] lg:text-[14px] tracking-[2px] cursor-pointer"
              onClick={handleFileUploadClick}
            >
              {t('getlink.uploadFiles')}
              {/* UPLOAD FILES */}
            </p>
            <p className="text-yellow text-[20px] lg:text-[40px] tracking-[2px]">
              {/* OR */}
              {t('getlink.or')}
            </p>
            <p className="text-yellow text-[10px] lg:text-[14px] tracking-[2px]  ml-6">
              {/* SELECT A FOLDER */}
              {t('getlink.select')}
            </p>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }} // Hide the file input visually
              onChange={handleFileChange} // Add onChange event handler
              multiple // Allow multiple file selection
            />
          </div>
        </div>

        {/* LOCK ICON */}
        <div className="absolute top-[20px] lg:top-[35px] translate-y-[-50%] translate-x-[-50%] left-[220px] lg:left-[285px]">
          <img
            src="/assets/SecuritLockYellow.svg"
            alt="lock-icon"
            className="w-[12px]"
          />
        </div>

        <div className=" absolute top-[170px] translate-y-[-50%] translate-x-[-50%] left-[260px] lg:left-[322px]">
          <p className="text-[8px] lg:text-[10px] whitespace-nowrap text-black rotate-90 tracking-[1.2px]">
          {t('sidebar.advance')}
            {/* ADVANCED ENCRYPTION STANDARD (AES) 256-BIT */}
          </p>
        </div>
        {/* UPTO TEXT */}
        {files.length === 0 ? (
          <div className="relative">
            <div className=" absolute top-[120px] lg:top-[170px] translate-y-[-50%] translate-x-[-50%] left-[190px] lg:left-[228px] ">
              <p className="text-[20px] lg:text-[40px] whitespace-nowrap text-yellow  tracking-[1.2px] mb-2">
                {/* UP TO */}
                {t('getlink.upto')}
              </p>
              <p className="text-[14px] text-yellow tracking-[1.2px] text-right">
                {/* FREE */}
                {t('getlink.free')}
              </p>
            </div>
            <div className=" absolute top-[160px]  translate-y-[-50%] translate-x-[-50%] left-[290px] lg:left-[380px] ">
              <p className="text-[20px] lg:text-[40px] whitespace-nowrap text-black  tracking-[1.2px] mb-2">
                1 TB
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className=" absolute top-[200px] px-8 translate-y-[-50%]  overflow-y-scroll w-full">
          <div className="h-[100px] ">
            {files?.map((file) => (
              <>
                <p className="text-[10px] text-yellow" key={file}>
                  {file}
                </p>
              </>
            ))}
          </div>
        </div>
        <div className="mt-[190px] lg:mt-[270px] 3xl:mt-[300px] flex flex-col gap-y-8">
          <div className="  px-8  ">
            <input
              type="text"
              className="w-[100%] bg-transparent outline-none border-b-2 bor border-yellow  text-[10px] tracking-[2px] lg:text-[12px] text-yellow placeholder:text-yellow py-2"
              placeholder="TITLE"
            />
          </div>

          <div className=" px-8  ">
            <textarea
              type="text"
              className="w-[100%] bg-transparent outline-none border-b-2 border-yellow  text-[10px] tracking-[2px] lg:text-[12px] text-yellow placeholder:text-yellow pb-3 "
              placeholder="NOTE"
            />
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          {files.length !== 0 ? (
            <div>
              <img
                src="/assets/GetALinkY.png"
                alt="get-a-link"
                className="w-[238px] mt-3"
              />
            </div>
          ) : (
            ""
          )}
          <div className="absolute left-[220px] lg:left-[285px] top-4">
            <img src="/assets/dot.png" alt="dots" className="w-[6px]" />
          </div>
        </div>
      </motion.div>
    </Draggable>
  );
};

export default GetLink;
