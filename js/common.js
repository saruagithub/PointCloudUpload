function initPage(obj,currentPage,pageTotall) {//根据返回的页总数显示页码
    addPageHtml(obj,currentPage,pageTotall);
}

function addPageHtml(obj,current,pageNum) {
    obj.empty();
    /*上一页*/
    obj.append('<li><a id="pre_btn"><<</a></li>');
    if (current == 1){
        $("#pre_btn").attr("disabled",true);
        $("#pre_btn").css("pointer-events","none");
    }
    /* 中间页 */
    if (pageNum < 8){
        for (var i=1;i<= pageNum;i++){
            if(i == current){
                obj.append('<li><a class="active">'+i+'</a></li>');
                continue;
            }
            obj.append('<li><a class="pagenum">'+i+'</a></li>');
        }
    }
    if (pageNum >= 8){
        if (current>4 && pageNum>4){
            obj.append('<li><a class="pagenum">'+1+'</a></li>');
            obj.append('<li><a class="pagenum">'+2+'</a></li>');
            obj.append('<li><a id="dot1"><span>...</span></a></li>');
        }
        /*中间页*/
        if (current >4 && current <= pageNum-3) {
            var start  = current - 1,end = current + 1;
        }else if(current >4 && current > pageNum-3){
            var start  = pageNum - 3,end = pageNum;
        }else{
            var start = 1,end = 7;
        }
        for (;start <= end;start++) {
            if (start <= pageNum && start >=1) {
                if (start == current) {
                    obj.append('<li><a class="active">'+start+'</a></li>');
                } else if(start == current+1){
                    obj.append('<li><a id="pagenum">'+ start +'</a></li>');
                }else{
                    obj.append('<li><a class="pagenum">'+ start +'</a></li>');
                }
            }
        }
        if (end < pageNum) {
            if (end != (pageNum-1)){
                obj.append('<li><a id="dot2"><span>...</span></a></li>');
            }
            obj.append('<li><a class="pagenum">'+pageNum+'</a></li>');
        }
    }
    /*下一页*/
    obj.append('<li><a id="next_btn">>></a></li>');
    if (current == pageNum) {
        $("#next_btn").attr("disabled",true);
        $("#next_btn").css("pointer-events","none");
    }
}

function addNewsPageEvent() {
    $("#pre_btn").click(function () {
        --currentPage; //除去上一页btn
        console.log(currentPage);
        $('#li2').empty();//empty原来的news
        requestData(); //添加新的news
    });

    $("#next_btn").click(function () {
        ++currentPage; //除去上一页btn
        console.log(currentPage);
        $('#li2').empty();//empty原来的news
        requestData(); //添加新的news
    });

    $(".pagenum").click(function () {
        // console.log("come on ?？");
        var currentPageString = $(this).text().trim();
        currentPage = Number(currentPageString);
        console.log(currentPage);
        $('#li2').empty();
        requestData();
    });
    console.log("event finished!");
}
