(function(){
  //截取地址栏的id
  var lid=location.search.substring(4);
  //ajax请求
  ajax({
    type:"get",
    url:"data/products/products.php",
    dataType:"json",
    success:function(products){
      var html1="";
      var html2="";
      var html3="";
      var html4="";
      var html5="";
      var a=0;
      var b=0;
      var c=0;
      var d=0;
      var e=0;
      products.forEach((p,i)=>{
        var {id,shop_title,shop_text1,shop_price,shop_inventory,shop_color,shop_system,shop_type,shop_img}=p;
        var img=shop_img.split("^");
        var system=shop_system.split("^");
        var color=shop_color.split("^");
        console.log(color);
        if(id==lid){
          html1+=`${shop_title}`
        };
        if(a<5 && id==lid){
          for (var i = 0; i < img.length; i++) {
            img[i]
            a++;
            if(i==0){html2+=`<div class="eh-thumb-img-item">
                                <img src="${img[i]}" alt="">
                             </div>`
            }else if(i==4){
            html2+=`<div class="current">
                      <img src="${img[i]}" alt="">
                    </div>`
            }else{
            html2+=`<div class="">
                      <img src="${img[i]}" alt="">
                    </div>`
            }
          }
        };
        if (id==lid) {
          html3+=`<h2 class="eh-pro-title">${shop_title}</h2>
                  <div class="eh-pro-short-desc">${shop_text1}</div>
                  <div class="eh-pro-info-price">
                    <span>现价</span>
                    <span class="price-fuhao">￥</span>
                    <span class="price-strong" id="yhsd_variantSelector_price">${shop_price}</span>
                  </div>
                  <div class="eh-pro_detail-info-discount" id="yhsd_productDiscount">
                    <a class="settings-link_color" href="#">
                      全场满168元包邮（不包含新疆、西藏、台湾、香港、澳门）
                    </a>
                  </div>`
        };
        if(id==lid){
          if(system[0]!=""){
            html4+=`<h3>版本</h3>`
            for (var i1 = 0; i1 < system.length; i1++) {
              html4+=`<div class="pro-detail-sub-each-wrap clearfix">
                ${system[i1]}
              </div>`
            }
          }
          if(color[0]!=""){
            html5+=`<h3>颜色</h3>`
            for (var i2 = 0; i2 < color.length; i2++) {
              html4+=`<div class="pro-detail-sub-each-wrap clearfix">
                ${color[i2]}
              </div>`
            }
          }
        };
      })
      document.querySelector("#breadcrumb-lid").innerHTML=html1;
      document.querySelector(".eh-thumb-img").innerHTML=html2;
      document.querySelector(".eh-pro-info-top").innerHTML=html3;
      document.querySelector("#clearfix-1").innerHTML=html4;
      document.querySelector("#clearfix-2").innerHTML=html5;
    }
  })
})();
