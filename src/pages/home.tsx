//import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { bookServices } from "@/services/bookServices";
import { Header } from "@/components/sharedui/header";
import { Bookcard } from "@/components/sharedui/bookCard";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams] = useSearchParams();

  const query = useQuery({
    queryKey: ["books"],
    queryFn: () => bookServices.getData(searchParams.get("search")),
  });

  useEffect(() => {
    query.refetch();
  }, [searchParams]);

  return (
    <main className="space-y-12">
      <Header />
      <section className="grid grid-cols-4 gap-6 m-auto max-w-7xl">
        {query.data?.map((book) => {
          return <Bookcard key={book._id} book={book} />;
        })}
      </section>
    </main>
  );
}
