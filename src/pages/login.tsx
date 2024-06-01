import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useAuth(user);

  return (
    <main className="h-screen flex justify-center items-center bg-indigo-100">
      <div className="w-[320px] space-y-2">
        <h4 className="text-blue-950 font-bold text-3xl">Buku! Buku! Buku!</h4>
        <section>
          <h2 className="font-bold text-lg">Login</h2>
          <p>Welcome back!</p>
        </section>
        <Input
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
        <section>
          Still not registered?{" "}
          <Link to="/register" className="text-white">
            Register
          </Link>
        </section>
      </div>
    </main>
  );
}
