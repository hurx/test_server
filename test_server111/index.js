//新增用例
$("#case-create-table").on('click', '.case-create-btn', function () {
    var td = '<td><div contenteditable="true" class="form-control case-input"></div></td>';
    var td_delete = '<td><button type="button" class="btn btn-info case-delete-btn" aria-label="Left Align"><span class="glyphicon glyphicon-minus-sign " aria-hidden="true"></span></button>' +
        '<div style="width:10%;display:inline-block"></div>' +
        '<button type="button" class="btn btn-info case-create-btn" aria-label="Left Align"><span class="glyphicon glyphicon-plus-sign " aria-hidden="true"></span></button></td>';
    var tr = '<tr>' + td + td + td + td + td_delete + '</tr>';
    $(this).parent().parent("tr").after(tr);
    // $("#case-create-table").append(tr);    
});

//删除用例
$("#case-create-table").on('click', '.case-delete-btn', function () {
    $(this).parent().parent("tr").remove();
});

//跳转到用例新增页面
$("#case-page-btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $("#case-create-page").show();
    $("#operation-page").hide();
});

//跳转到操作页面
$("#opt-page-btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $("#case-create-page").hide();
    $("#operation-page").show();
});

//修改用例
$(".modify-case-btn").on('click', function () {
    $(this).parents("td").siblings().find("div").attr({ contenteditable: "true" });
});

//保存修改后的用例
$(".save-case-btn").on('click', function () {
    $(this).parents("td").siblings().find("div").removeAttr("contenteditable");
});


//保存所有用例
$("#case-save-btn").on('click', function () {
    var project = $("#project").val();
    var version = $("#version").val();
    var author = $("#author").val();
    var suite = {"case_list":case_list,"project":project,"version":version,"author":author};
    var case_list ={};
    var case_info ={};
    $("#case-create-table").find("tbody").find("tr").each(function (index, ele) {
        if (index == "0") { } else {
            $(this).find("td").each(function (index, ele) {
                if (index == "4") { } 
                if (index == "0"){
                    case_info["class"] = $(this).find("div").text();
                }
                if (index == "1"){
                    case_info["process"] = $(this).find("div").text();
                }
                if (index == "2"){
                    case_info["except_res"] = $(this).find("div").text();
                }
                if (index == "3"){
                    case_info["actual_res"] = $(this).find("div").text();
                }
            });
            case_list[index] = case_info;
        }
    });
    console.log(suite);
});