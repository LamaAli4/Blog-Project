import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br
         from-primary/10 to-transparent rounded-full blur-3xl"
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr 
        from-primary/5 to-transparent rounded-full blur-3xl"
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2
         -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-transparent
          rounded-full blur-3xl"
      ></div>
    </div>
  );
};

export default Background;
