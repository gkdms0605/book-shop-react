import { BookReviewItem } from "@/models/book.model";
import {http, HttpResponse} from "msw";
import {fakerKO as faker} from "@faker-js/faker";

const bookReviewsData: BookReviewItem[] = Array.from({length: 8}).map((_, index) => ({
  id: index,
  userName: `${faker.person.lastName()}${faker.person.firstName()}`,
  content: faker.lorem.paragraph(),
  createdAt: faker.date.past().toISOString(),
  score: faker.number.int({min: 1, max: 5}), 
}));

export const reviewsById = http.get("http://localhost:9999/reviews/:bookId", () => {
  return HttpResponse.json(bookReviewsData, {
    status: 200
  })
}) 

export const addReivew = http.post("http://localhost:9999/reviews/:bookId", () => {
  return HttpResponse.json(
    {
      message: "리뷰가 등록되었습니다.",
    }, 
    {
      status: 201,
    }
  )
})

export const reviewForMain = http.get("http://localhost:9999/reviews", () => {
  return HttpResponse.json(bookReviewsData, {
    status: 200,
  })
})