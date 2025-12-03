import React from "react";

function Card({ imageSrc, title, message, buttonText }) {
  return (
    <div className="bg-white shadow-2xl rounded-3xl p-3 max-w-sm w-full text-center border-4 border-pink-300">
      <div className="flex justify-center mb-6">
        <img
          src={imageSrc}
          alt="Birthday Greeting Card"
          className="w-40 h-40 object-cover rounded-2xl shadow-xl border-2 border-pink-400"
        />
      </div>

      <h1 className="text-3xl font-extrabold text-pink-600 mb-3">{title}</h1>

      <p className="text-gray-700 mb-6 text-md">{message}</p>

      <button className="mt-4 w-full py-3 rounded-xl bg-pink-600 text-white text-lg font-bold hover:bg-pink-700 transition shadow-lg">
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
