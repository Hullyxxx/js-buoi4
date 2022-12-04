/**
 * Mô hình 3 khối Bài 1
 * Input: 3 số nguyên
 * Process: Lấy giá trị nhập vào, chuyển thành số nguyên và sắp xếp
 * Output: Xuất ra màn hình 3 số theo thứ tự tăng dần
 */

const btnSapXep = document.getElementById('btnSapXep')

btnSapXep.addEventListener('click', function() {
    var so1 = Math.floor(document.getElementById('txtSo1').value * 1);
    var so2 = Math.floor(document.getElementById('txtSo2').value * 1);
    var so3 = Math.floor(document.getElementById('txtSo3').value * 1);

    var result 
    if ( so1 < so2 && so1 < so3 ) {
        if (so2 < so3) {
            result = so1 + ' ' + so2 + " " + so3;
        } else {
            result = so1 + ' ' + so3 + " " + so2;
        }
    } else if (so2 < so1 && so2 < so3) {
        if (so1 < so3) {
            result = s2, + ' ' +so1, + " " +so3
        } else {
            result = so2 + ' ' + so3 + " " + so1;
        }
    } else if (so3 < so2 && so3 < so1) {
        if (so2 < so1) {
            result = so3 + ' ' + so2 + " " + so1;
        } else {
            result = so3 + ' ' + so1 + " " + so2;
        }
    }
    document.getElementById('ketQua').value = 'Kết quả là: ' + result;
})

/**
 * Mô hình 3 khối Bài 2
 * Input: Người sử dụng máy trong gia đình
 * Process: Kiểm tra ai là người sử dụng máy
 * Output: Đưa ra câu trả lời phù hợp cho từng người sử dụng máy
 */

const btnRespone = document.getElementById('btnRespone') 

btnRespone.addEventListener('click', function () {
    var thanhVienTrongGiaDinh = document.getElementById('textPerson').value;

    switch(thanhVienTrongGiaDinh) {
        case 'Bố':
            alert('Chào buổi sáng Bố')
            break;
        case 'Mẹ':
            alert('Mẹ đi chợ nấu cơm chưa dị?')
            break;
        case 'Anh Trai':
            alert('Hôm nay anh có đi đá bóng không thế?')
            break;
        case 'Em Gái':
            alert('Làm bài tập chưa em gái?')
            break;
    }
})

/**
 * Mô hình 3 khối Bài 3
 * Input: 3 số nguyên
 * Process: Chuyển dữ liệu string sang số và đếm bao nhiêu số chẵn bao nhiêu số lẻ
 * Output: Số lượng số chẵn và số lượng số lẻ
 */

function demSo() {
    var so1 = Math.floor(document.getElementById('txtDem1').value) * 1
    var so2 = Math.floor(document.getElementById('txtDem2').value) * 1
    var so3 = Math.floor(document.getElementById('txtDem3').value) * 1 

    var soChan = 0
    var soLe = 0
    if (so1%2 == 0) {
        soChan+=1
    } else {
        soLe+=1
    }
    if (so2%2 == 0) {
        soChan+=1
    } else {
        soLe+=1
    }
    if (so3%2 == 0) {
        soChan+=1
    } else {
        soLe+=1
    }
    document.getElementById('ketQuaDem').value = 'Có: ' + soChan + ' số chẵn và '  + soLe + ' số lẻ ' 
}

/**
 * Mô hình 3 khối Bài 4
 * Input: 3 cạnh của tam giác
 * Process: Chuyển dữ liệu string sang số và check xem là tam giác gì
 * Output: Tam giác gì ? 
 */

function checkTamGiacVuong(binhPhuong, tongBinhPhuong) {
    console.log(binhPhuong, ' ', tongBinhPhuong);
    if(binhPhuong == tongBinhPhuong) {
        alert('Đây là tam giác vuông')
    } else {
        alert('Đây là tam giác thường')
    }
}

function checkTamGiac() {
    var canh1 = Math.floor(document.getElementById('txtCanh1').value) * 1
    var canh2 = Math.floor(document.getElementById('txtCanh2').value) * 1
    var canh3 = Math.floor(document.getElementById('txtCanh3').value) * 1

    var canhLonNhat = canh1
    if (canh1 == canh2 && canh2 == canh3 && canh3 == canh1) {
        alert('Đây là tam giác đều')
    } else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
        alert('Đây là tam giác cân')
    } else {
        if (canh2 > canhLonNhat && canh2 > canh3) {
            binhPhuong = canh2 * canh2
            tongBinhPhuong = (canh1*canh1) + (canh3*canh3)
            checkTamGiacVuong(binhPhuong, tongBinhPhuong)
        } else if (canh3 > canhLonNhat && canh3 > canh2) {
            binhPhuong = canh3 * canh3
            tongBinhPhuong = (canh1*canh1) + (canh2*canh2)
            checkTamGiacVuong(binhPhuong, tongBinhPhuong)
        } else {
            binhPhuong = canh1 * canh1
            tongBinhPhuong = (canh3*canh3) + (canh2*canh2)
            checkTamGiacVuong(binhPhuong, tongBinhPhuong)
        }
    }
}