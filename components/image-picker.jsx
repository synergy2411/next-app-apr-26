"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function ImagePicker() {
  const fileInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  const uploadHandler = () => {
    fileInputRef.current.click();
  };

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <>
      {pickedImage && (
        <div style={{ width: "100px", height: "100px", position: "relative" }}>
          <Image
            src={pickedImage}
            style={{ position: "absolute" }}
            alt="Image selected by user"
            fill
          />
        </div>
      )}
      {!pickedImage && <p>Please select image to upload.</p>}
      <input
        type="file"
        hidden
        accept="image/png"
        name="image"
        ref={fileInputRef}
        onChange={imageChangeHandler}
      />
      <button type="button" className="btn btn-warning" onClick={uploadHandler}>
        Upload Logo
      </button>
    </>
  );
}

export default ImagePicker;
