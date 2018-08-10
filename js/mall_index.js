(function(){
  ajax({
    type:"get",
    url:"data/index/mall_index.php",
    dataType:"json",
    success:function(products){
      var html1="";
      var html2="";
      var html3="";
      var a=0;
      var b=0;
      var c=0;
      products.forEach((p,i)=>{
        var {shop_name,shop_price,shop_img,shop_type,shop_title}=p;
        if(b<2&&shop_type==2){
          b++;
          html2+=`<div class="eh-pro-item">
              <div class="pro-img-wrap">
              <a href="product_details.html" title="${shop_name}">
               <img src="${shop_img}" alt="">
              </a>
              </div>
              <div class="eh-pro-desc">
                <h6>
                  <a href="product_details.html" title="${shop_name}">${shop_name}</a>
                </h6>
                <div class="small-info">${shop_title}</div>
                <div class="pro-buy-now">
                   ￥${shop_price}
                  <a href="product_details.html">立即购买</a>
                </div>
              </div>
            </div>`
        };

        if(c<12&&shop_type==3){
          c++;
          html3+=`<div class="eh_pro_parts">
            <div class="pro-img-parts">
            <a href="product_details.html" title="${shop_name}">
             <img src="${shop_img}" alt="">
            </a>
            </div>
            <div class="eh-pro-desc">
              <h6>
                <a href="product_details.html" title="${shop_name}">${shop_name}</a>
              </h6>
              <div class="small-info">${shop_title}</div>
              <div class="pro-buy-now">
                ￥${shop_price}
                <a href="product_details.html">立即购买</a>
              </div>
            </div>
          </div>`
        };
      }
    )
      // document.querySelector("#a1").innerHTML=html1;
      document.querySelector(".eh_section_accessories").innerHTML=html2;
      document.querySelector(".eh_section_accessories_a").innerHTML=html3;
    }
  })

})();
