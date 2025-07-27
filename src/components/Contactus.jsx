import React from "react";

const Contactus = () => {
  return (
    <div>
      <h2 className="text-center text-2xl p-4 m-4 font-bold">
        Contact Us Page
      </h2>
      <form
        action=""
        className="text-center w-6/12 mx-auto border-[2px] border-gray p-14 rounded-xl flex justify-center items-center flex-col"
      >
        <div className="mb-4 flex gap-20">
          <label htmlFor="name">Name: </label>
          <input
            className="border border-black p-2 outline-none rounded-lg"
            type="text"
            placeholder="Enter Name"
            id="name"
          />
        </div>

        <div className="mb-4 flex gap-20">
          <label htmlFor="email">Email: </label>
          <input
            className="border border-black p-2 outline-none rounded-lg"
            type="text"
            placeholder="Enter Email"
            id="email"
          />
        </div>

        <div className="mb-4 flex gap-20">
          <label htmlFor="phoneno">Phone: </label>
          <input
            className="border border-black p-2 outline-none rounded-lg"
            type="number"
            placeholder="Enter Phone Number"
            id="phoneno"
          />
        </div>

        <button className="p-2 bg-red-950 w-3/12 text-white rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default Contactus;
