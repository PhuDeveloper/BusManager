<h1>Quản lý xe bus đưa đón học sinh</h1> 

Trước đó dự án này mình (sử dụng Html, Scss, Bootstrap để làm giao diện), (sử dụng Jquery, Ajax để call api và xử lý dữ liệu)

Sau khi có thời gian khoảng hơn 1 tháng được học hỏi và tham gia vào dự án thực tế tại công ty, mình đã nắm được cơ bản về luồng hoạt động của React Redux. Nên mình muốn làm lại dự án này bằng ReactJs để có thể ôn lại những kiến thức mình học đc trong dự án thực tế đó.

Dự án này mình đã tạo xong cấu trúc cơ bản của react redux, đã làm xong các chức năng chính như (xem danh sách, thêm, xóa, sửa )và đang hoàn thiện dần các chức năng khác

<h4>Các công nghệ sử dụng : </h4> ReactJs, Redux toolkit, Redux-saga, Axios, Ant Design

<h4>Cấu trúc luồng hoạt động của code</h4>


- Action được gửi đi từ component

- Saga sẽ lắng nghe các action đó rồi thực hiện call api để lấy dữ liệu

- Dữ liệu trả về từ api sẽ đc gửi vào reduce để cập nhật lại vào store

- Dữ liệu sau khi cập nhật sẽ đc trả về component để hiển thị ra giao diện
 



<h4>Chức năng: </h4>



- Đăng nhập tài khoản admin
- Chỉnh sửa thông tin cá nhân của admin
- Đổi mật khẩu cho tài khoản
- Thêm, xóa, sửa, xem thông tin của tài xế 
- Xem danh sách và phân lịch làm việc cho tài xế 
- Xác nhận và phân lại lịch làm việc nếu như tài xế báo vắng
- Xem danh sách, phân tuyến cho xe bus
- Xem danh sách, tạo điểm đón mới và chỉnh sửa mức giá cụ thể cho từng điểm đón




