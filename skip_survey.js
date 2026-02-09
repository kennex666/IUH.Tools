/*
 - Thông tin tác giả: @Kennex666
 - Viết ngày 13/01/2026
 - Phiên bản 1.2
 - Tên script: Đánh giá khảo sát nhanh
 */

var elems = document.getElementsByClassName("group_cauhoi");
for (var i = 0; i < elems.length; i++) {
  var radioButtons = elems[i].getElementsByTagName("input");
    const btns = Array.from(radioButtons)
    const last = btns.length - 1;
    btns[last]?.removeAttribute("disabled");
    btns[last]?.dispatchEvent(new MouseEvent("click", {bubbles: true, cancelable: true}));
  };

const inputYKien = document.getElementsByClassName("input-ykien")[0]
inputYKien.value = "Không"
