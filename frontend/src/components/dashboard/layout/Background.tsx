import React from "react";

export default function Background() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl absolute -top-48 -left-48" />
        <div className="w-96 h-96 bg-cyan-500 rounded-full blur-3xl absolute top-1/2 right-0" />
        <div className="w-96 h-96 bg-blue-700 rounded-full blur-3xl absolute bottom-0 left-1/3" />
      </div>
    </div>
  );
}
