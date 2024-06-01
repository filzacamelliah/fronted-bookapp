import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useMutation, useQuery } from "react-query";
import { bookServices } from "./services/bookServices";
import { useQueryClient } from "react-query";
import { toast } from "sonner";
import { IBook } from "./types/entity";

const initialBookValue: IBook = {
  name: "",
  desc: "",
  author: "",
  isbn: "",
  file: null,
};

export default function App() {
  const [book, setBook] = useState(initialBookValue);
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["books"],
    queryFn: bookServices.getData,
  });
  const { mutate: handleAddBook } = useMutation({
    mutationFn: bookServices.createData,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Book added");
      setBook(initialBookValue);
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });
  return (
    <div className="grid grid-rows-3 justify-items-center gap-3">
      <h1 className="font-bold text-9xl text-indigo-300"> Books</h1>
      <section className="grid grid-cols-4">
        <Input
          value={book.name}
          placeholder="Book name"
          onChange={(e) => setBook({ ...book, name: e.target.value })}
        />
        <Input
          value={book.desc}
          placeholder="Description "
          onChange={(e) => setBook({ ...book, desc: e.target.value })}
        />
        <Input
          value={book.author}
          placeholder="Author"
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
        <Input
          value={book.isbn}
          placeholder="ISBN"
          onChange={(e) => setBook({ ...book, isbn: e.target.value })}
        />
        <Input
          type="file"
          onChange={(e) =>
            setBook({ ...book, file: e.target.files as FileList })
          }
        />
        <Button
          onClick={() => {
            handleAddBook(book);
          }}
        >
          Submit
        </Button>
      </section>
      {query.data?.length === 0 ? (
        <div>Add your book collection now!</div>
      ) : null}
      {query.isLoading ? <div>Loading nih</div> : null}
      {query.isError ? (
        <div>Errror nih!</div>
      ) : (
        <section>
          {query.data?.map((book) => {
            return (
              <div key={book._id}>
                <div>{book.name}</div>
                <div>{book.desc}</div>
                <div>{book.author}</div>
                <div>{book.isbn}</div>
                <div>
                  <img
                    src={`http://localhost:8000/${book.file}`}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            );
          })}
        </section>
      )}
      {/* <section>
        {query.data?.map((book) => {
          return (
            <div key={book._id}>
              <div>{book.name}</div>
              <div>{book.desc}</div>
              <div>{book.author}</div>
              <div>{book.isbn}</div>
            </div>
          );
        })}
      </section> */}
    </div>
  );
}
