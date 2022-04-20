function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1 : 
 * Đầu vào : khai báo ngày tháng năm, tách thành ngày, tháng, năm riêng từng biến
 * Xử lý : kiểm tra ngày trong tháng 28 29 30 31 ngày, ngaySau thang + 1 nếu tháng 12 năm + 1 và ngược lại với ngayTruoc
 * Đầu ra : xuất kết quả 
 */

function dateInfo(dt) {
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
    var dmax = dayMax(month, year);
    day -= 1;
    if (day == 0) {
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
    var dmax = dayMax(month, year);
    day += 1;
    if (day > dmax) {
        if (month == 12) {
            year += 1;
            month = 1;
        } else {
            month += 1;
        }
        day = 1;
    }
    var kq = "Ngày sau: " + month + "-" + day + "-" + year;
    getEleID("kqNgay").innerHTML = kq;
}


/**
 * Bài 2 :
 * Đầu vào : khai báo tháng năm
 * Xử lý : kiểm tra ngày tối đa trong tháng của năm
 * Đầu ra : hiển thị kết quả
 */

getEleID("btnNgayTD").onclick = function () {
    var month = takeMonth("txtNgayTD");
    var year = takeYear("txtNgayTD");
    var dmax = dayMax(month, year);
    var kq = "Ngày tối đa: " + dmax + " ngày";
    getEleID("kqNgayTD").innerHTML = kq;
}


/**
 * Bài 3 :
 * Đầu vào : khai báo số nguyên có 3 chữ số
 * Xử lý : tách hàng trăm chục đơn vị sau đó đọc từng phần
 * Đầu ra : hiển thị kết quả
 */
function docSo(so) {
    var t = "";
    switch (so) {
        case 0:
            t = "không";
            break;
        case 1:
            t = "một";
            break;
        case 2:
            t = "hai";
            break;
        case 3:
            t = "ba";
            break;
        case 4:
            t = "bốn";
            break;
        case 5:
            t = "năm";
            break;
        case 6:
            t = "sáu";
            break;
        case 7:
            t = "bảy";
            break;
        case 8:
            t = "tám";
            break;
        case 9:
            t = "chín";
            break;
        default:
            t = "";
            break;
    }
    return t;
}

getEleID("btnSNT").onclick = function () {
    var snt = getEleID("txtSNT").value;
    var hangTram = Math.floor(snt / 100);
    var hangChuc = Math.floor((snt % 100) / 10);
    var hangDv = snt % 10;
    var kq = "";

    if (hangTram != 0) {
        if (hangChuc == 1) {
            if (hangDv == 0) {
                kq = docSo(hangTram) + " trăm mười";
            } else {
                kq = docSo(hangTram) + " trăm mười " + docSo(hangDv);
            }
        } else if (hangChuc == 0) {
            if (hangDv == 0) {
                kq = docSo(hangTram) + " trăm";
            } else {
                kq = docSo(hangTram) + " trăm lẻ " + docSo(hangDv);
            }
        } else {
            if (hangDv == 0) {
                kq = docSo(hangTram) + " trăm " + docSo(hangChuc) + " mươi";
            } else if (hangDv == 1) {
                kq = docSo(hangTram) + " trăm " + docSo(hangChuc) + " mươi mốt";
            } else {
                kq = docSo(hangTram) + " trăm " + docSo(hangChuc) + " mươi " + docSo(hangDv);
            }
        }
    }
    else {
        if (hangChuc == 0) {
            if (hangDv == 0) {
                kq = "";
            } else {
                kq = docSo(hangDv);
            }
        } else if (hangChuc == 1) {
            if (hangDv == 0) {
                kq = "mười";
            } else {
                kq = "mười " +  docSo(hangDv);
            }
        } else {
            if (hangDv == 0) {
                kq = docSo(hangChuc) +  " mươi";
            } else if (hangDv == 1) {
                kq = docSo(hangChuc) + " mươi mốt";
            } else {
                kq = docSo(hangChuc) + " mươi " + docSo(hangDv);
            }
        }
    }
    getEleID("kqSNT").innerHTML = kq;
}

/**
 * Bài 4 
 * Đầu vào khai báo toạ độ trường, sv1, sv2, sv3
 * Xử lý : tính khoảng cách từng sv và so sánh khoảng cách lớn nhất
 * Đầu ra : hiển thị kết quả
 */

function tinhToaDo(x1, y1, x2, y2) {
    x1 = parseFloat(x1);
    x2 = parseFloat(x2);
    y1 = parseFloat(y1);
    y2 = parseFloat(y2);
    var toaDo = Math.sqrt(Math.pow(Math.abs(x2-x1),2) + Math.pow(Math.abs(y2-y1),2))
    return toaDo;
}

function soLonNhat(a, b, c){
    var max = a;
    if (max > b) {
        max > c ? max = a : max = c;
    } else {
        max = b;
        max > c ? max = b : max = c;
    }
    return max;
}

getEleID("btnToaDo").onclick = function () {
    var xTruong = getEleID(txtTdXTruong).value;
    // var yTruong = getEleID(txtTdYTruong).value;
    // var xSv1 = getEleID(txtTdXSv1).value;
    // var ySv1 = getEleID(txtTdYSv1).value;
    // var xSv2 = getEleID(txtTdXSv2).value;
    // var ySv2 = getEleID(txtTdYSv2).value;
    // var xSv3 = getEleID(txtTdXSv3).value;
    // var ySv3 = getEleID(txtTdYSv3).value;
    // var toaDoSV1 = tinhToaDo(xTruong,yTruong,xSv1,ySv1);
    // var toaDoSV2 = tinhToaDo(xTruong,yTruong,xSv2,ySv2);
    // var toaDoSV3 = tinhToaDo(xTruong,yTruong,xSv3,ySv3);
    console.log(xTruong);
}



