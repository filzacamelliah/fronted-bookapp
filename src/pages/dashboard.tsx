import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "react-query";
import { bookServices } from "@/services/bookServices";
import { useQueryClient } from "react-query";
import { toast } from "sonner";
import { IBook } from "@/types/entity";
import { Header2 } from "@/components/sharedui/header2";

const initialBookValue: IBook = {
  name: "",
  desc: "",
  author: "",
  isbn: "",
  file: null,
};

export default function Dashboard() {
  const [book, setBook] = useState(initialBookValue);
  const queryClient = useQueryClient();

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
    <div className="space-y-12">
      <div className="">
        <Header2 />
      </div>
      <div className="grid grid-rows-6 space-y-4 m-40">
        <section>
          <Input
            className="mt-48 w"
            value={book.name}
            placeholder="Book name"
            onChange={(e) => setBook({ ...book, name: e.target.value })}
          />
          <Input
            className="my-4"
            value={book.desc}
            placeholder="Description "
            onChange={(e) => setBook({ ...book, desc: e.target.value })}
          />
          <Input
            className="my-4"
            value={book.author}
            placeholder="Author"
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
          <Input
            className="my-4"
            value={book.isbn}
            placeholder="ISBN"
            onChange={(e) => setBook({ ...book, isbn: e.target.value })}
          />
          <Input
            className="my-4"
            type="file"
            onChange={(e) =>
              setBook({ ...book, file: e.target.files as FileList })
            }
          />
          <Button
            className="my-4 ml-[550px]"
            onClick={() => {
              handleAddBook(book);
            }}
          >
            Submit
          </Button>
        </section>
      </div>
      {/* {query.data?.length === 0 ? (
        <div>Add your book collection now!</div>
      ) : null}
      {query.isLoading ? <div>Loading nih</div> : null}
      {query.isError ? (
        <div>Errror nih!</div>
      ) : 
      )} */}
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
