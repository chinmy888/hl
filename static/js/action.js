$(document).ready(function () {
    var checked_yj = $("input[name='cheakRadios']:checked").attr("yj");
    var checked_xj = $("input[name='cheakRadios']:checked").attr("xj");
    $(".max-price").text(checked_yj);
    $(".min-price").text(checked_xj);
    $("input[name='cheakRadios']").click(function (e) {
        var jc_number = $(".jc").val();
        var gj_number = $(".gj").val();
        var zy_number = $(".zy").val();
        if (e.target.id === "jc_r") {
            $("#gj_div").hide();
            $("#zy_div").hide();
            $("#jc_div").show();
            $(".max-price").text($(this).attr("yj") * jc_number);
            $(".min-price").text($(this).attr("xj") * jc_number);
            $(".gj").val(1);
            $(".zy").val(1);
        }
        if (e.target.id === "gj_r") {
            $("#jc_div").hide();
            $("#zy_div").hide();
            $("#gj_div").show();
            $(".max-price").text($(this).attr("yj") * gj_number);
            $(".min-price").text($(this).attr("xj") * gj_number);
            $(".jc").val(1);
            $(".zy").val(1);
        }
        if (e.target.id === "zy_r") {
            $("#gj_div").hide();
            $("#jc_div").hide();
            $("#zy_div").show();
            $(".max-price").text($(this).attr("yj") * zy_number);
            $(".min-price").text($(this).attr("xj") * zy_number);
            $(".jc").val(1);
            $(".gj").val(1);
        }
    });
    $(".plus").click(function (e) {
        if (e.target.id === "jc_+") {
            $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $(".jc").val());
            $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $(".jc").val());
        } else if(e.target.id === "gj_+") {
            $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $(".gj").val());
            $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $(".gj").val());
        }else {
            $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $(".zy").val());
            $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $(".zy").val());
        }
    });
    $(".minus").click(function (e) {
        if (e.target.id == "jc_-") {
            $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $(".jc").val());
            $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $(".jc").val());
        } else if(e.target.id == "gj_-") {
            $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $(".gj").val());
            $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $(".gj").val());
        }else {
            $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $(".zy").val());
            $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $(".zy").val());
        }
    });
});
// $(".js-free-use").click(function () {
//     $(".layer-1").after("<div class=\"modal-mask\" style=\"z-index: 100000;\"></div>\n" +
//         "<div class=\"modal-wrapper\" style=\"z-index: 100000;\">\n" +
//         "    <div class=\"modal-content register-modal\" style=\"width: 900px;\">\n" +
//         "        <div class=\"modal-body\">\n" +
//         "            <div class=\"register-form-wrapper\">\n" +
//         "                <div>\n" +
//         "                    <div class=\"register-form-tip\"><p>HelloWorld<br>注册账户，赠送<span>1万</span>翻译字符</p></div>\n" +
//         "                    <form id=\"modal_reg_form\">\n" +
//         "                        <div class=\"userName-error\" ><span></span></div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <input type=\"text\" class=\"input\"  id=\"userName\" name=\"userName\" placeholder=\"请输入注册用户名\">\n" +
//         "                                    <label class=\"form-item-label form-item-label-name\"></label>\n" +
//         "                                </div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"passWord-error\"><span></span></div>\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <input type=\"password\" class=\"password\" id=\"passWord\" name=\"passWord\" placeholder=\"请输入密码\">\n" +
//         "                                    <label class=\"form-item-label form-item-label-pname\"></label></div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"confirmWord-error\"><span></span></div>\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <input type=\"password\" class=\"password\" id=\"confirmWord\" name=\"confirmWord\" placeholder=\"请确认密码\">\n" +
//         "                                    <label class=\"form-item-label form-item-label-pname\"></label></div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"email-error\"><span></span></div>\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <input type=\"text\" class=\"input\" id=\"email\" name=\"email\" placeholder=\"注册邮箱地址\">\n" +
//         "                                    <label class=\"form-item-label form-item-label-pname\"></label></div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item form-code-item\">\n" +
//         "                            <div class=\"emailCode-error\"><span></span></div>\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <input type=\"text\" class=\"input\" id=\"emailCode\" name=\"emailCode\" placeholder=\"请输入验证码\">\n" +
//         "                                    <label class=\"form-item-label form-item-label-sname\"></label></div>\n" +
//         "                                <div class=\"form-item-code\">\n" +
//         "                                    <button class=\"get-modal-codeBtn\" type=\"button\" id=\"sendCode\">获取验证码</button>\n" +
//         "                                </div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"parentCode-error\" ><span></span></div>\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <input type=\"text\" class=\"input\"  id=\"parentCode\" name=\"parentCode\" placeholder=\"注册邀请码\">\n" +
//         "                                    <label class=\"form-item-label form-item-label-name\"></label>\n" +
//         "                                </div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                   注册账户表示阅读并同意 <a href=\"/info/301\" style=\"color: blue; \"target=\"_blank\">《HelloWorld用户协议》</a>\n" +
//         "                                </div>\n" +
//         "                                <div class=\"parentCode tip form-item-err\" ><span></span></div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                        <div class=\"form-item\">\n" +
//         "                            <div class=\"form-item-box\">\n" +
//         "                                <div class=\"form-item-input\">\n" +
//         "                                    <button class=\"form-submit-btn \" type=\"button\" id=\"reg_submit\">立即注册</button>\n" +
//         "                                </div>\n" +
//         "                                <div class=\"reg_submit form-item-err\"><span></span></div>\n" +
//         "                            </div>\n" +
//         "                        </div>\n" +
//         "                    </form>\n" +
//         "                </div>\n" +
//         "            </div>\n" +
//         "        </div>\n" +
//         "        <button class=\"modal-close\" aria-label=\"Close\">\n" +
//         "            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
//         "                <path d=\"M1.01692 15.7818C1.16335 15.9282 1.40076 15.9282 1.5472 15.7818L7.98489 9.34273L14.4301 15.7886C14.5766 15.9351 14.814 15.9351 14.9604 15.7886L15.7559 14.9931C15.9023 14.8466 15.9023 14.6092 15.7559 14.4627L9.31058 8.01676L15.7652 1.56081C15.9116 1.41435 15.9116 1.17689 15.7652 1.03042L14.9698 0.234846C14.8233 0.0883845 14.5859 0.0883846 14.4395 0.234846L7.98482 6.69087L1.53715 0.242521C1.39071 0.0960666 1.15328 0.0960666 1.00685 0.242521L0.211392 1.03806C0.0649527 1.18451 0.0649528 1.42196 0.211392 1.56842L6.65914 8.01683L0.221508 14.4558C0.0750766 14.6023 0.0750766 14.8397 0.221508 14.9862L1.01692 15.7818Z\"\n" +
//         "                      fill=\"#ACB3B8\"></path>\n" +
//         "            </svg>\n" +
//         "        </button>\n" +
//         "    </div>\n" +
//         "</div>");
//
// })

function checkUser() {
    // 获取用户输入的数据
    var userName = $("#userName");
    var userNameSpan = $(".userName-error").children("span");
    // 正则，正则验证用户输入的数据是否合法
    var re = /^[\u4E00-\u9FA5A-Za-z0-9_\ ]{6,20}$/i;
    var judgeFn = /^[^ ]+$/;
    if (userName.val() === '') {
        userName.addClass("is-error");
        userNameSpan.show();
        userNameSpan.text("注册用户名不能为空!");
        return false;
    }
    if (re.test(userName.val()) && judgeFn.test(userName.val())) {
        userName.removeClass("is-error");
        userNameSpan.hide();
        return true;
    } else {//不合法
        userName.addClass("is-error");
        userNameSpan.show();
        userNameSpan.text("注册账户由6~20个字符组成,不能包含空格");
        return false;
    }
}

function checkEmail() {
    debugger;
    // 获取用户输入的数据
    var email = $("#email");
    var emailSpan = $(".email-error").children("span");
    // 正则，正则验证用户输入的数据是否合法
    var re = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    if (email.val() === '') {
        email.addClass("is-error");
        emailSpan.show();
        emailSpan.text("注册邮箱不能为空!");
        return false;
    }
    if (re.test(email.val())) {
        email.removeClass("is-error");
        emailSpan.hide();
        return true;
    } else {//不合法
        email.addClass("is-error");
        emailSpan.show();
        emailSpan.text("填写的E-mail格式不正确!");
        return false;
    }
}
function checkEmailCode() {
    // 获取用户输入的数据
    var emailCode = $("#emailCode");
    var emailCodeSpan = $(".emailCode-error").children("span");
    if (emailCode.val() === '') {
        emailCode.addClass("is-error");
        emailCodeSpan.show();
        emailCodeSpan.text("邮箱验证码不能为空!");
        return false;
    } else {
        emailCode.removeClass("is-error");
        emailCodeSpan.hide();
        return true;
    }
}
function checkPwd() {
    var passWord = $("#passWord");
    var passWordSpan = $(".passWord-error").children("span");
    var re = /^(\w){6,20}$/;
    if(passWord.val() === ''){
        passWord.addClass("is-error");
        passWordSpan.text("请输入密码!");
        passWordSpan.show();
        return false;
    }else if(re.test(passWord.val())){
        passWord.removeClass("is-error");
        passWordSpan.text("");
        passWordSpan.hide();
        return true;
    }else{
        passWord.addClass("is-error");
        passWordSpan.text("密码由6-20个字母、数字、下划线组成!");
        passWordSpan.show();
        return false;
    }
}
function checkPwd2() {
    var confirmWord = $("#confirmWord");
    var confirmWordSpan = $(".confirmWord-error").children("span");
    var passWord = $("#passWord");
    if(confirmWord.val() === ''){
        confirmWord.addClass("is-error");
        confirmWordSpan.text("请确认密码!");
        confirmWordSpan.show();
        return false;
    }else {
        if(confirmWord.val() === passWord.val()){
            confirmWord.removeClass("is-error");
            confirmWordSpan.text("");
            confirmWordSpan.hide();
            return true;
        }else{
            confirmWord.addClass("is-error");
            confirmWordSpan.text("两次输入密码不一致!");
            confirmWordSpan.show();
            return false;
        }
    }
}
var countdown = 60;
$(document).on("click", "#sendCode", function () {
    var obj = $("#sendCode");
    var email = $("#email");
    var emailSpan = $(".email-error").children("span");
    if((email.val() === null || email.val() === undefined || email.val() === "")){
        email.addClass("is-error");
        emailSpan.show();
        emailSpan.text("注册邮箱不能为空!");
        return;
    }else {
        var myreg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
        if(!myreg.test(email.val())){
            email.addClass("is-error");
            emailSpan.show();
            emailSpan.text("填写的E-mail格式不正确!");
            return;
        }else{
            emailSpan.hide();
            $.ajax({
                type:"post",
                url:"/sendEmail",
                data:{'email':email.val()},
                dataType:"json",
                success:function (data){
                    if(data.code === 200){
                        emailSpan.show();
                        emailSpan.text("邮箱验证码发送成功!");
                        settime(obj);
                    }
                    else if(data.code === 400){
                        emailSpan.show();
                        emailSpan.text("此邮箱已注册");
                    }else{
                        emailSpan.show();
                        emailSpan.text("验证码发送失败!请重试");
                    }
                },
                error:function(){
                    emailSpan.show();
                    emailSpan.text("验证码发送失败!请重试");
                }
            });
        }
    }
})
function settime(obj) { //发送验证码倒计时
    if (countdown === 0) {
        obj.attr('disabled', false);
        obj.text("发送验证码");
        countdown = 60;
        return;
    } else {
        obj.attr('disabled', true);
        obj.text("(" + countdown + ")");
        countdown--;
    }
    setTimeout(function () {
        settime(obj)
    }, 1000)
}
$(document).on("click", "#reg_submit", function () {
    var userNameSpan = $(".userName-error").children("span");
    var parentCodeSpan = $(".parentCode-error").children("span");
    var emailCodeSpan = $(".emailCode-error").children("span");
    var emailSpan = $(".email-error").children("span");
    if((checkUser() && checkEmail() && checkPwd() && checkPwd2() && checkEmailCode())){
        $.ajax({
            type:"post",
            url:"/webReg",
            data:{
                userName:$("#userName").val(),
                passWord:$("#passWord").val(),
                email:$("#email").val(),
                emailCode:$("#emailCode").val(),
                parentCode:$("#parentCode").val()
            },
            dataType:"json",
            success:function (data){
                if(data.code === 200){
                    userNameSpan.text("注册成功!即将跳转到个人中心");
                    userNameSpan.show();
                    window.location.href = "/userInfo";
                }
                else if(data.code === 404){
                    userNameSpan.text(data.message);
                    userNameSpan.show();
                }
                else if(data.code === 405){
                    parentCodeSpan.text(data.message);
                    parentCodeSpan.show();
                }
                else if(data.code === 406){
                    emailCodeSpan.text(data.message);
                    emailCodeSpan.show();
                }
                else if(data.code === 400){
                    emailSpan.text(data.message);
                    emailSpan.show();
                }
            },
            error:function(){
                userNameSpan.text("注册服务错误!请联系客服");
                userNameSpan.show();
            }
        });
    }
})
$(document).on("click", ".modal-close", function () {
    $(":input").removeClass("is-error");
    $(".modal-mask").hide();
    $(".modal-wrapper").hide();
})

function carNum($this) {
    //输入框的值
    var value = $this.val();
    if (isNaN(value)) {//判断值是不是数字
        $this.val(1);
        $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $this.val());
        $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $this.val());
    } else if (value == "") {//这是当只有1位的时候，删除这个会进入这个判断，如果没有该判断，当只有一位的时候就不能删除
        $this.val(1);
        $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $this.val());
        $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $this.val());
    } else if (value < 1) {//判断值是不是1
        $this.val(1);
        $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $this.val());
        $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $this.val());
    } else if (value.indexOf(".") != -1) {//判断有没有输入小数点
        $this.val(value.substring(0, value.indexOf(".")))
        $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $this.val());
        $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $this.val());
    }
    $(".max-price").text($("input[name='cheakRadios']:checked").attr("yj") * $this.val());
    $(".min-price").text($("input[name='cheakRadios']:checked").attr("xj") * $this.val());
}