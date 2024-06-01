import { IBook } from "@/types/entity";
import { API_URL } from "@/config/apiUrl";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Bookcard = ({ book }: { book: IBook }) => {
  return (
    <main className="space-y-2 border-indigo-400 p-3 rounded-lg bg-gradient-to-b from-indigo-400 to-indigo-50 ">
      <div>
        <img
          src={`${API_URL}/${book.file}`}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center space-y-4">
        <section>
          <h3>{book.name}</h3>
          <p>{book.author}</p>
        </section>
        <div className="ml-0">
          <Link to={`/${book._id}`}>
            <Button size="sm" variant="outline">
              More
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
