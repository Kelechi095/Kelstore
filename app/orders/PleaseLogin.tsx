"use client";

import React from "react";
import NotAllowed from "../components/NotAllowed";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const PleaseLogin = () => {
  const router = useRouter();

  return (
    <>
      <NotAllowed title="Your must be logged in to view your orders" />
      <div className="max-w-[200px] mx-auto" >
        <Button
          label="Login"
          small
          outline
          onClick={() => router.push("/login")}
        />
      </div>
    </>
  );
};

export default PleaseLogin;
