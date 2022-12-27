import React from "react";

const AddTask = () => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log(event.target.value);
        }
      }

  return (
    <div className="text-center">
      <h3 className="text-3xl font-semibold mb-4 text-center">
        Please add your task here
      </h3>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">
            Write your task
          </span>
          <input type="text" className="border-2 border-blue-500 rounded-lg" onKeyDown={handleKeyDown}/>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">
            Upload your image
          </span>
          <input type="text" className="border-2 border-blue-500 rounded-lg" />
        </label>

        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-lg mt-2">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
