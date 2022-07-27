import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //Bằng cách tạo các điều khiển này trong lớp thành phần của bạn, bạn có quyền truy cập ngay lập tức để lắng nghe, cập nhật và xác thực trạng thái của đầu vào biểu mẫu.
  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
