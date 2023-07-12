/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import { useDropzone } from "react-dropzone";
import { sidebaropen, sidebaroff } from "@/src/store/features/metadata";
import Location from "./Location";
import { RiAccountCircleLine } from "react-icons/ri";

const FirstPage = () => {
  const { mymetadata, sidebarstate } = useSelector((state) => state.meta);
  const [num, setNum] = useState(0);
  const [myfiles, setFiles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prevNum) => (prevNum + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const mysidebaropen = () => {
    dispatch(sidebaropen("on"));
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return bytes + " B";
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(2) + " MB";
    } else {
      return (bytes / 1073741824).toFixed(2) + " GB";
    }
  };

  const onDrop = async (acceptedFiles) => {
    const newFolders = [];
    const newFiles = [];
    // console.log(acceptedFiles)
    if (acceptedFiles.length > 1) {
      // console.log('folder');
      // Treat as folder
      const folderFiles = [];

      for (const file of acceptedFiles) {
        folderFiles.push({
          name: file.name,
          size: formatFileSize(file.size),
        });
      }

      // Extract the folder name from the path
      const folderPath = acceptedFiles[0].path;
      const folderName = folderPath.substring(0, folderPath.lastIndexOf("/"));

      // console.log(folderName);

      newFolders.push({
        name: folderName,
        files: folderFiles,
      });
    } else {
      // console.log('file');
      // Treat as file
      const file = acceptedFiles[0];

      newFiles.push({
        name: file.name,
        size: formatFileSize(file.size),
      });
    }

    // console.log(newFolders);
    // console.log(newFiles);

    setFiles((prevFiles) => [...prevFiles, ...newFolders, ...newFiles]);
    console.log(myfiles);
    mysidebaropen(); // Call sidebaropen after dropping a file or folder
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div className="bg-[#ffff00] h-[100vh] w-full flex-col justify-center items-center relative">
        <div
          {...getRootProps()}
          className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"
        >
          <input {...getInputProps()} />
          {isDragActive ? <p>Drop the files here...</p> : ""}
        </div>
        <div className="h-[20%] w-full flex">
          <div className="flex items-center flex-1 ml-5">
            
          </div>
          <div className="flex flex-row items-center justify-end flex-1">
            <div className="relative flex items-center h-full ">
              
              <div className="mb-10 mr-5 2xl:mb-20">
                {" "}
              
              </div>
            </div>
          </div>
        </div>

        <div className="h-[60%] w-full flex justify-center items-center">
          <div className="flex-1">
            <SideBar props={myfiles} setProps={setFiles} />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 h-full">
            {mymetadata[num]?.mainlogo && (
              <img
                src={mymetadata[num].mainlogo}
                alt=""
                className="w-[468px] h-[235px]"
              />
            )}
            {mymetadata[num]?.mainlogo && (
              <img src={mymetadata[num].mainlogosub} alt="" className="mt-5" />
            )}
          </div>
          <div className="flex-1 h-full"></div>
        </div>

        <div className="h-[20%] w-full flex">
          <div className="flex-1 flex items-end text-[10px] mb-5 ml-5 text-black opacity-80">
          
            <br /> 
          
          </div>

          <div className="flex-1 flex justify-end items-end text-[10px] mb-5 mr-5 text-black opacity-80">
            <div className="mb-1 ">
              
            </div>{" "}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
