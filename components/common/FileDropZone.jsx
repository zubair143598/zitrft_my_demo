import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sidebarTab } from "@/lib/constants";
import { changeSidebar } from "@/src/store/features/modalSlice";
import { addFile } from "@/src/store/features/fileSlice";
import { useTranslation } from "react-i18next";


const FileDropZone = ({ onFilesDropped, children }) => {
  const { t } = useTranslation();

  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDraggingOver(false);
      const newFiles = Array.from(event.dataTransfer.files);
      const newFileNames = newFiles.map((file) => file.name);
      dispatch(addFile(newFileNames)); // Dispatch the action with the newFileNames payload
    };

    const handleDragOver = (event) => {
      event.preventDefault();
      setIsDraggingOver(true);
    };

    const handleDragLeave = () => {
      setIsDraggingOver(false);
    };

    document.addEventListener("drop", handleDrop);
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("dragleave", handleDragLeave);

    return () => {
      document.removeEventListener("drop", handleDrop);
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("dragleave", handleDragLeave);
    };
  }, [onFilesDropped]);

  return (
    <div
      className="relative h-screen flex justify-between flex-col "
      onClick={() => dispatch(changeSidebar(sidebarTab.sidebar))}
      style={{
        filter: isDraggingOver ? "blur(10px)" : "none",
      }}
    >
      {children}
      {isDraggingOver && (
        <p className="text-white text-xl">
          {t('FileDropZone.drop')}
          {/* Drop your files here */}
          </p>
      )}
    </div>
  );
};

export default FileDropZone;
