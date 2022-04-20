function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1 : 
 * Đầu vào : khai báo ngày tháng năm, tách thành ngày, tháng, năm riêng từng biến
 * Xử lý : kiểm tra ngày trong tháng 28 29 30 31 ngày, ngaySau thang + 1 nếu tháng 12 năm + 1 và ngược lại với ngayTruoc
 * Đầu ra : xuất kết quả 
 */

function dateInfo(dt){
    var t = getEleID(dt).value;
    var dInfo = new Date(t);
    return dInfo;
}

function takeYear(dt) {
    var d = dateInfo(dt);
    var year = d.getFullYear();
    return year;
}

function takeMonth(dt) {
    var d = dateInfo(dt);
    var month = d.getMonth() + 1;
    return month;
}

function takeDay(dt) {
    var d = dateInfo(dt);
    var day = d.getDate();
    if (isNaN(day)) {
        day = 1;
    }
    return day;
}

function isLeap(y) {
    var checkLeap = false;
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        checkLeap = true;
    }
    return checkLeap;
}

function dayMax(m, y) {
    var dmax;
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dmax = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dmax = 30;
            break;
        case 2:
            if (isLeap(y)) {
                dmax = 29;
            } else {
                dmax = 28;
            }
            break;
        default:
            dmax = "Tháng không hợp lệ";
    }
    return dmax;
}


getEleID("btnNgayTruoc").onclick = function () {
    var day = takeDay("txtNgay");
    var month = takeMonth("txtNgay");
    var year = takeYear("txtNgay");
    var dmax = dayMax(month,year);
    day -= 1;
    if( day == 0 ){
        if (month == 1) {
            year -= 1;
            month = 12;
        } else {
            month -= 1;
        }
        day = dmax;
    }
    var kq = "Ngày trước: " + month + "-" + day + "-" + year;
    getEleID("kqNgay").innerHTML = kq;
}

getEleID("btnNgaySau").onclick = function () {
    var day = takeDay("txtNgay");
    var month = takeMonth("txtNgay");
    var year = takeYear("txtNgay");
    var dmax = dayMax(month,year);
    day += 1;
    if( day > dmax ){
        if (month == 12) {
            year += 1;
            month = 1;
        } else {
            month += 1;
        }
        day = 1;
    }
    var kq = "Ngày sau: "  + month + "-" + day + "-" + year;
    getEleID("kqNgay").innerHTML = kq;
}


/**
 * Bài 2 :
 * Đầu vào : khai báo tháng năm
 * Xử lý : kiểm tra ngày tối đa trong tháng của năm
 * Đầu ra : hiển thị kết quả
 */

getEleID("btnNgayTD").onclick = function(){
    var day = takeDay("txtNgayTD");
    var month = takeMonth("txtNgayTD");
    var year = takeYear("txtNgayTD");
    var dmax = dayMax(month,year);
    var kq = "Ngày sau: "  + month + "-" + day + "-" + year;
    getEleID("kqNgayTD").innerHTML = kq;
}


