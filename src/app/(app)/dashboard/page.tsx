"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <div>
      <div>DASHBOARD</div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
}
