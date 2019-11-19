var CathayLifeMajiConsultant = (function () {
    

    

    //連出去的網站
    var url = 'https://campaigns.cathaylife.com.tw/OAWeb/html/OA/C8/index.html?cele_name=O2O&cele_placement=OfficialPc&cele_type=Bn&cele_creative=O2O';
    
    //開啟視窗:_blank,_top,_self
    var target = '_blank';
    
    //貼紙圖，可用gif/png/gif/base65
    // var img = '/cathaylife/img/consultants/icon.png';
    var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAADICAMAAABF5Ob2AAAC+lBMVEUAAABPsjFLszVLszNKsjNPtTM/sDj///8Hk0T7/vtDsTNOtDAOnFf///////9JsjT///8pqEJJsjVMtDdMszRJsjRKsjT///////9LszT///9JsjT+//6W0H/1/PPqpAYdo0UqrzX////vqgGy46fztyTDuWAfokwboU7////4xEdLsjn3vSRyw1vE5L3///8vrECf1of///8SnVbtpwD5uycajCj/////////////zEDvpQD+yDh+rlv2/fT////d3d3/ugD/4KtKsjQAmVr///8CAgLg3+DU1NT626b/twD/4q3b29v/3qgAl18kIiMAk2QRERH96fvY2NiRkZHd3dzPz8/o5+j/zUPj4uMbGhv6+fn//sP/8rXz05z/dXYrKyuLi4vKysolpBKGhofWx9j1z4/19fU7Ojr/6L7/5LAzMzP/vQQBkjnzqQDr7Oz4rwD/yzz6tQHvpAD42KL/xyfAv8D/vgwAjC9GRUPfyNj/6bFAQEAxqhq2trZMTExxcHFnZ2f/1UM6qSPv7+/+ogD/6MS8u7x5eXnvwnBFsS//7sesrqz91JTvxoH/ZG1TU1P/wRTb4u/94reUlJQAl1P/yzL/wx75uRr/rQGenp6ZmZk/sjb43r+AgIADj1LFx8TDwsP/9rr017MAiz0lqi7/2KazzqykpKVUqEsxrjSAuTPb3+exsLLw06UmtD6crhucspzCtolbW1tpsUBGpy6syrD+3a//kYP2xmBgYGDh0r2op6ins6X/3aFVo21oqSn/xwHz5fbrypn2vCz/zZ81nUvysy/gyJiUr5T/rJH1vT/a6P3trBq+tBfPsQ/R0pv/VmZpqlxIpVz/6VeovzntyjgMmwjpzuHnmAHemAH+8deDv5f/3ISQslJdV0eBrWiAeF7exzrh1qWhoaL+syrG7dafx6OzzY6cxm+CpySYxo5vroWglXQAgxv++OnKzNzt4q//hH04qnV2wFm7mhTHusp9wYKsuGH/uZd/xHCLl7HlkADfjQC1W4OcAAAAQHRSTlMACRcPHyth8/5lSDbkcRjD2J5Sfz6v7Ogtb1fZlntG+3a0rqOJG/uzw4bvloZXxaB/Mbm3Zi35zsK/t+Bm1ry2wezUUgAAFqRJREFUeNrs1t9rUmEY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';
    
    //如果有要追蹤的id code
    var id = 'some_id';

    var urlList = ['/cathaylife/products/insurance/ind','/cathaylife/products/insurance/pro','/cathaylife/products/insurance/sav',
    '/cathaylife/products/insurance/inv','/cathaylife/products/insurance/gro','/cathaylife/products/insurance/sim',
    '/cathaylife/products/insurance/add','/cathaylife/products/insurance/oiu','/cathaylife/products/insurance/lif'];

    var locationUrl=location.pathname;

    var ss = locationUrl.substring(0, 34);

    if(locationUrl.length < 13 && locationUrl.match('/cathaylife/')){
        setTimeout(function(){$('#some_id').css('display','none')},0);
    }else if(locationUrl.length >= 13 && urlList.indexOf(ss)==-1){
        setTimeout(function(){$('#some_id').css('display','none')},0);
    }else{
        setTimeout(function(){$('#some_id').css('display','block')},0);
    }


    //額外擴充的 css 樣式
    var extra_class = 'extra_class';

    //貼紙的Y位置，數字是從底往上算
    var position = {};

    //第一屏
    position.top = 150;//260

    //不在第1屏也不在footer時
    position.default = 150;
    
    //滑到footer時
    position.bottom = 220;

    

    //貼紙相關位置和動態時間，可調整
    var wrap_css = [];
    wrap_css.push('position:fixed');
    wrap_css.push('z-index:105');
    wrap_css.push('right:15px');
    wrap_css.push('bottom:150px');//260
    wrap_css.push('-webkit-transition:bottom .3s');
    wrap_css.push('transition:bottom .3s');
    
    //貼紙圖片設定
    var a_tag_css = [];
    a_tag_css.push('width:86px');
    a_tag_css.push('height:92px');
    a_tag_css.push('display:block');
    a_tag_css.push('cursor:pointer');
    a_tag_css.push('background-position:0 0');
    a_tag_css.push('background-image:url('+img+')');

    var stickerTarget;
    var generateHTML = function(){
        var _css = '';
        var _a_css = '';
        var html = '';
        for(var i in wrap_css)
            _css += wrap_css[i]+';'
        _css = _css.substr(0,_css.length-1);

        for(var i in a_tag_css)
            _a_css += a_tag_css[i]+';'
        _a_css = _a_css.substr(0,_a_css.length-1);

        html += '<div id="'+id+'" class="__CathayLifeMajiConsultant '+extra_class+'" style="'+_css+'">';
        html += '<a href="'+url+'" target="'+target+'" style="'+_a_css+'"></a>';
        html += '</div>'

        $("body").append(html);
        stickerTarget = $('.__CathayLifeMajiConsultant');
        addEventListener();
    }

    var addEventListener = function(){
        stickerTarget.bind("mouseover",function(e){
            $(this).find("a").css("background-position","0 100%");
        })

        stickerTarget.bind("mouseout",function(e){
            $(this).find("a").css("background-position","0 0");
        })

        $(window).bind("scroll",function(e){
          updatePosition();
        }).trigger("scroll");
    }

    var updatePosition = function(){
        var scrollTop = $(document).scrollTop();
        var bodyH = $(document).height();
        var windowH = $(window).height();

        var a = 100;
        var b = bodyH - windowH - 200;
        var c = bodyH - (scrollTop+windowH);

        if(scrollTop>a && scrollTop < b){
            stickerTarget.css("bottom",position.default);
        }else if(scrollTop<a){
            stickerTarget.css("bottom",position.top);
        }else if(scrollTop>b){
            stickerTarget.css("bottom",position.bottom);
        }
    }

    var init = function(){
        generateHTML();
    }
    
    init();

    return {};
})();