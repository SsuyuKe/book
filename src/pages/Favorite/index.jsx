import BookCard from "@/components/BookCard"
import { useBookStore } from "@/store/book"

const Favorite = () => {
  const { favoriteBooks } = useBookStore()
  return (
    <div className="mt-3">
      <h2 className="text-2xl ml-3 font-bold mb-2">我的願望清單</h2>
      <div className="flex">
        {favoriteBooks.map(book => (
          <BookCard book={book} key={book.id} showButtons={false}/>
        ))}
      </div>
    </div>
  )
}

export default Favorite