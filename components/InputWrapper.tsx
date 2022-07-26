import { FunctionComponent, ReactNode } from "react";

interface IInputWrapperProps {
  children: ReactNode;
}

const InputWrapper: FunctionComponent<IInputWrapperProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-8">{children}</div>;
};

export default InputWrapper;
