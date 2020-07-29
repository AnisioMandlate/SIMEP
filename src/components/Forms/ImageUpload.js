import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./ImageUpload.module.css";
import { FiUpload } from "react-icons/fi";

const ImageUpload = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className={styles.dropzone} {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Imagem do Usuario" />
      ) : (
        <p>
          <FiUpload />
          Clique aqui para adicionar a imagem
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
