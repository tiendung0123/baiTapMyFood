# baiTapMyFood
bài tâp tạo API theo cấu trúc database myFood đã thực hiện.

Test API bằng postman, ứng với yêu cầu của đề bài.

- Tìm 5 người đã like nhà hàng nhiều nhất.
=> Method: GET
URL: http://localhost:3000/api/users/top-likes

- Tìm 2 nhà hàng có lượt like nhiều nhất.
=> Method: GET
URL: http://localhost:3000/api/restaurants/top-likes
  
- Tìm người đã đặt hàng nhiều nhất.
=> Method: GET
URL: http://localhost:3000/api/users/most-active
  
- Tìm người dùng không hoạt động trong hệ thống
(không đặt hàng, không like, không đánh giá nhà
hàng).
=> Method: GET
URL: http://localhost:3000/api/users/inactive
