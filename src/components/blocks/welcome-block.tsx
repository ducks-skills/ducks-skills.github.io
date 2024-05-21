import { useAppStore } from "@context/app-context";
import { FC } from "react";

const WelcomeBlock: FC = () => {
  const resume = useAppStore();

  return <div></div>;
};

export { WelcomeBlock };
