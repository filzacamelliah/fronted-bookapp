import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Avatar from "boring-avatars";

export const Header = () => {
  const { user } = useAuth({});

  // console.log(user);

  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      navigate(`/?search=${searchKey}`);
    }
  }
  console.log({ user });

  return (
    <header className="flex justify-between items-center p-10 bg-indigo-100">
      <Link to="/">
        <div className="font-bold text-xl text-blue-950">Buku! Buku! Buku!</div>
      </Link>
      <Input
        className="w-[400px]"
        placeholder="Search"
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyUp={handleSearch}
      />
      {user ? (
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button>Add Your Book</Button>
          </Link>
          <div className="text-xl font-bold text-blue-950">{user.name}</div>
          <Avatar
            name={user.name}
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      )}
    </header>
  );
};
