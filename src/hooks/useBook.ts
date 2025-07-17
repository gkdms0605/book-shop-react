import { useEffect, useState } from "react"
import { BookDetail, BookReviewItem, BookReviewItemWrite } from "../models/book.model"
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { addBookReview, fetchBookReivew } from "@/api/review.api";

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);
  
  const {isloggedIn} = useAuthStore();
  const [cartAdded, setCartAdded] = useState(false);

  const {showAlert} = useAlert();
  
  const likeToggle = () => {
    if(!isloggedIn) {
      showAlert('로그인이 필요합니다');
      return;
    }

    if(!book) return;

    if(book.liked) {
      unlikeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        })
      })
    } else {
      likeBook(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        })
      })
    }
  }; 
  
    const addToCart = (quantity: number) => {
      if(!book) return;
      
      addCart({
        book_id: book.id,
        quantity: quantity
      }).then(() => {
        setCartAdded(true);
        setTimeout(() => {
          setCartAdded(false);
        }, 3000);
      });
    };

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then((book) => {
      setBook(book);
    })

    fetchBookReivew(bookId).then((reviews) => {
      setReviews(reviews);
    })
  }, [bookId]);

  const addReivew = (data: BookReviewItemWrite) => {
    if(!book) return ;

    addBookReview(book.id.toString(), data).then((res) => {
      // fetchBookReivew(book.id.toString()).then((reviews) => {
      //   setReviews(reviews)
      // });

      showAlert(res?.message);
    })
  }

  return { book, likeToggle, addToCart, cartAdded, reviews, addReivew};
}