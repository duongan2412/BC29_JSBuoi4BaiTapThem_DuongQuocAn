function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1 : 
 * Đầu vào : khai báo ngày tháng năm, tách thành ngày, tháng, năm riêng từng biến
 * Xử lý : kiểm tra ngày trong tháng 28 29 30 31 ngày, ngaySau thang + 1 nếu tháng 12 năm + 1 và ngược lại với ngayTruoc
 * Đầu ra : xuất kết quả 
 */

function takeYear(dt) {
    var t = getEleID(dt).value;
    var d = new Date(t);
    var year = d.getFullYear();
    return year;
}

function takeMonth(dt) {
    var t = getEleID(dt).value;
    var d = new Date(t);
    var month = d.getMonth() + 1;
    return month;
}

function takeDay(dt) {
    var t = getEleID(dt).value;
    var d = new Date(t);
    var day = d.getDate();
    return day;
}

function isLeap(y) {
    var checkLeap = false;
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        checkLeap = true;
    }
    return checkLeap;
}

function dayOfMonth(dt) {
    var m = takeMonth(dt);
    var y = takeYear(dt);
    var dOfMonth = 0;
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dOfMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dOfMonth = 30;
            break;
        case 2:
            if (isLeap(y)) {
                dOfMonth = 29;
            } else {
                dOfMonth = 28;
            }
            break;
        default:
            dOfMonth = "Tháng không hợp lệ";
    }
    return dOfMonth;
}


getEleID("btnNgayTruoc").onclick = function () {
    var day = takeDay("txtNgay");
    var month = takeMonth("txtNgay");
    var year = takeYear("txtNgay");
    var e = dayOfMonth("txtNgay")
    console.log("day of month " + e);

    day -= 1;
    if (day == 0) {
        month -= 1;
        day = dayOfMonth("txtNgay");
    } else {
        
    }

    var kq = month + "-" + day + "-" + year;
    // getEleID("kqNgay").innerHTML = kq;
}
