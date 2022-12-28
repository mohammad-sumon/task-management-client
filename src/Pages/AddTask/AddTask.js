import { Button, FileInput, Label, TextInput } from "flowbite-react";
import React from "react";

const AddTask = () => {
  // const handleKeyDown = (event) => {
  //   event.preventDefault();
  //   if (event.key === "Enter") {
  //     console.log(event.target.value);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(e.target.text.value);
    console.log(e.target.file.value);
  }


  return (
    <div className="px-6">
      <h3 className="text-3xl font-semibold my-4 text-center">
        Please add your task here
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text1" value="Write your task here" />
          </div>
          <TextInput name="text" id="text1" type="text" placeholder="" required={true} />
        </div>
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload Image" />
          </div>
          <FileInput name="file" id="file" />
        </div>
        <Button size="lg" type="submit" gradientDuoTone="greenToBlue">SUBMIT</Button>
      </form>
    </div>
  );
};

export default AddTask;
