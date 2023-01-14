import React from "react";

interface IFormContainer {
  children: React.ReactNode;
}

const FormContainer = ({ children }: IFormContainer) => {
  return (
    <div className="py-12 font-nunito">
      <div className="px-48 justify-content-md-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
