import { create } from "zustand";
import resume from "@public/resume.json";
import welcome from "@public/welcome.json";
import { App } from "../types/app";

const useAppStore = create<App>((set) => ({
  resume,
  welcome,
}));

export { useAppStore };
