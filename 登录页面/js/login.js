 var reg = /^[\u4e00-\u9fa5]+$/g; /*中文*/
 var reg0 = /^[\u4e00-\u9fa5]{3,}$/g;
 var reg1 = /^[\u4e00-\u9fa5]{3,10}$/g;
 var reg2 = /^(31*)\d{8}$/g;
 var reg3 = /^\d{11}$/g; /*电话*/
 var reg4 = /^\w+([._-]\w+)*@(\w+\.)+\w+$/g; /*邮箱*/
 var reg5 = /^\d$/g;

 function my_func1() {

     var xm = document.getElementById("input1").value;
     var mm = document.getElementById("input2").value;
     if (xm == "" || xm == null) {
         alert("请输入你的手机");
         return false
     }
     if (!reg3.test(xm)) {
         alert("请输入正确的电话");
         return false;
     }
     if (mm == "" || mm == null) {
         alert("请输入密码");
         return false;
     } else {
         return true;
     }
 }

 function my_func2() {

     var yhm = document.getElementById("input3").value;
     var sj = document.getElementById("input4").value;
     var yx = document.getElementById("input5").value;
     var mm = document.getElementById("input6").value;
     if (yhm == "" || yhm == null) {
         alert("请输入用户名");
         return false
     }
     if (sj == "" || sj == null) {
         alert("请输入你的手机");
         return false
     }
     if (!reg3.test(sj)) {
         alert("请输入正确的电话");
         return false;
     }
     if (!reg4.test(yx)) {
         alert("请输入有效的邮箱");
         return false;
     }
     if (mm == "" || mm == null) {
         alert("请输入密码");
         return false;
     } else {
         return true;
     }
 }

 function my_func3() {

     var yhm = document.getElementById("input7").value;
     var sj = document.getElementById("input8").value;
     var yx = document.getElementById("input9").value;
     var mm = document.getElementById("input10").value;
     if (yhm == "" || yhm == null) {
         alert("请输入用户名");
         return false
     }
     if (sj == "" || sj == null) {
         alert("请输入你的手机");
         return false
     }
     if (!reg3.test(sj)) {
         alert("请输入正确的电话");
         return false;
     }
     if (!reg4.test(yx)) {
         alert("请输入有效的邮箱");
         return false;
     }
     if (mm == "" || mm == null) {
         alert("请输入密码");
         return false;
     } else {
         return true;
     }
 }