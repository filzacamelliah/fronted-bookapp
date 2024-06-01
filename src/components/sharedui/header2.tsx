import { Button } from "../ui/button";
import { Link } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import Avatar from "boring-avatars";

export const Header2 = () => {
  const { user } = useAuth({});

  return (
    <header className="flex justify-between items-center p-10 bg-indigo-100">
      <Link to="/">
        <div className="font-bold text-xl text-blue-950">Buku! Buku! Buku!</div>
      </Link>
      {user ? (
        <div className="flex items-center gap-4">
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
