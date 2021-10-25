
function move_user(user_name){
    id("iwm").findOne().click();
    sleep(1000);
    setText(user_name);
    sleep(1000);
    var user_tag = text(user_name).findOne();

    // 长按搜索的结果
    var user_tag = id("f0f").findOne();
    user_tag.longClick();
    sleep(2000);

    // 点击移出
    user_bounds = text("移出").findOne().bounds();
    click(user_bounds.centerX(), user_bounds.centerY());
}

function find_msg(){
    var tag = id("fa1").find();
    id("fa1").find().forEach(function(tag){        
        var temp = tag.find(className("android.widget.TextView"));
        if(temp.length >=2){
            
            var msg = tag.findOne(id("f8a"));
            var msg_str = msg.text();
            // 找到指定的关键词
            if(msg_str.indexOf("手工活")>-1){
                user_name_str = temp[0].text();
                id("iwf").findOne().click();
                sleep(2000);
                // 点击群成员
                user_bounds = text("群成员").findOne().bounds();
                click(user_bounds.centerX(), user_bounds.centerY());
                move_user(user_name_str);
            }
        }
        
    });
}

toast('脚本启动成功');
launch("com.tencent.wework");
sleep(5000);

click("自动化测试");
sleep(3000);
find_msg();
