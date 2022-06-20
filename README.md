<h1>Quản lý xe bus đưa đón học sinh</h1> 




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





