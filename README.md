<h1>Quản lý xe bus đưa đón học sinh</h1> 

Các công nghệ sử dụng : ReactJs, Redux toolkit, Redux-saga, Ant Design

Api sử dụng cho project được lấy từ dự án làm nhóm trên trường
<h2>Cấu trúc luồng hoạt động của code</h2>

<img src="./image/reactjs.png" alt="" />
- Action được gửi đi từ component
- Saga sẽ lắng nghe các action đó rồi thực hiện call api để lấy dữ liệu
- Dữ liệu trả về từ api sẽ đc reduce cập nhật lại vào store
- Dữ liệu sau khi cập nhật sẽ đc trả về component để hiển thị ra giao diện
 



<h2>Chức năng được chia theo phân quyền như sau</h2>

<h3>ADMIN</h3>

- Đăng nhập tài khoản admin
- Chỉnh sửa thông tin cá nhân của admin
- Đổi mật khẩu cho tài khoản
- Thêm, xóa, sửa thông tin của tài xế 
- Phân lịch làm việc cho tài xế 
- Xác nhận và phân lại lịch làm việc nếu như tài xế báo vắng
- Phân tuyến cho xe bus
- Tạo điểm đón và chỉnh sửa mức giá cụ thể cho từng điểm đón

<h3>TÀI XẾ</h3>

- Đăng nhập tài khoản tài xế
- Chỉnh sửa thông tin cá nhân
- Đổi mật khẩu
- Điểm danh các học sinh lên xe trong ngày 
- Xem lịch làm việc và báo vắng nếu như có việc bận, ốm đau,...

<h3>PHỤ HUYNH</h3>

- Đăng nhập tài khoản phụ huynh
- Chỉnh sửa thông tin cá nhân
- Đổi mật khẩu chho tài khoản
- Xem danh sách con đang theo học tại trường
- Đăng kí, hủy đăng kí điểm đón cho con 
- Xem thống kê các ngày đi học hoặc vắng học của con

