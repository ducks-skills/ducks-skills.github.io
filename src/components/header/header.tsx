"use client";

import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Link from "next/link";
import { useAppStore } from "@context/app-context";

const Header: React.FC = () => {
  const { resume } = useAppStore();
  console.log(resume);
  return (
    <AppBar>
      <Toolbar>
        <Link href="https://google.com">{resume?.basics?.name}</Link>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
