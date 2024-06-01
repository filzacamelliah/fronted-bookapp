import { Header } from "@/components/sharedui/header";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { bookServices } from "@/services/bookServices";
import { API_URL } from "@/config/apiUrl";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
//import queryClient fro

export default function SinglePage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  //fetching data pakai id
  const query = useQuery({
    queryKey: [`book-${id}`],
    queryFn: () => bookServices.getSingleData(id as string),
  });

  const { mutate: handlePinjamBuku } = useMutation({
    mutationFn: () => bookServices.updateData(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Happy Reading!");
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });

  return (
    <main className="space-y-28 ">
      <Header />
      <section className="grid grid-cols-2 max-w-7xl gap-8">
        <div>
          <img
            src={`${API_URL}/${query.data?.file}`}
            width={400}
            height={400}
            className="rounded-lg ml-16"
          />
        </div>
        <div className="space-y-10">
          <h1>{query.data?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptates est corrupti beatae dolores reiciendis odit id eius,
            exercitationem molestiae rerum quo mollitia nostrum. Suscipit esse
            dolore ea itaque placeat?
          </p>
          <p>{query.data?.author}</p>
          <p>{query.data?.desc}</p>
          <p>{query.data?.isbn}</p>

          {query.data?.isAvailable === true ||
          query.data?.isAvailable === undefined ? (
            <Button onClick={() => handlePinjamBuku()}>Read this book</Button>
          ) : (
            <Button disabled>Unavailable for now</Button>
          )}
        </div>
      </section>
    </main>
  );
}
