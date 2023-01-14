/*
 - Thông tin tác giả: @Kennex666
 - Viết ngày 14/01/2023
 - Phiên bản 1.0
 - Tên script: Đánh giá khảo sát nhanh
 */

var elems = document.getElementsByClassName("group_cauhoi");
for (var i = 0; i < elems.length; i++) {
  var radioButtons = elems[i].getElementsByTagName("input");
  Array.from(radioButtons).forEach(function(elem) {
    elem.removeAttribute("disabled");
    elem.dispatchEvent(new MouseEvent("click", {bubbles: true, cancelable: true}));
  });
}