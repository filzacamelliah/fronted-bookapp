import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { handleRegister } = useAuth(user);
  return (
    <main className="h-screen flex justify-center items-center bg-indigo-100">
      <div className="w-[320px] space-y-2">
        <h4 className="text-blue-950 font-bold text-3xl">Buku! Buku! Buku!</h4>
        <section>
          <h2 className="font-bold text-lg">Register</h2>
          <p>Welcome! Make an account to get started.</p>
        </section>
        <Input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          placeholder="Email "
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button className="w-full" onClick={handleRegister}>
          Register
        </Button>
        <section>
          Already have an account?{" "}
          <Link to="/login" className="text-white">
            Login
          </Link>
        </section>
      </div>
    </main>
  );
}
