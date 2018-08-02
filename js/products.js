(function(){
  ajax({
    type:"get",
    url:"data/products/products.php",
    dataType:"json",
    success:function(products){
      var html1="";
      var html2="";
      var a=0;
      var b=0;
      products.forEach((p,i)=>{
        var {id,shop_title,shop_text1,shop_price,shop_type,shop_img}=p;
        var img=shop_img.split("^");
        if(a<id &&shop_type>0){
          a++;
          html1+=`<div class="eh_pro_parts">
              <div class="pro-img-parts">
              <a href="product_details.html?id=${id}" title="${shop_title}">
               <img src="${img[0]}" alt="">
              </a>
              </div>
              <div class="eh-pro-desc">
                <h6>
                  <a href="product_details.html?id=${id}" title="${shop_title}">${shop_title}</a>
                </h6>
                <div class="small-info">${shop_text1}</div>
                <div class="pro-buy-now">
                  ￥${parseFloat(shop_price).toFixed(2)}
                  <a href="">立即购买</a>
                </div>
              </div>
            </div>`
        };
        if(b<id &&shop_type>1){
          b++;
          html2+=`<div class="eh_pro_parts">
              <div class="pro-img-parts">
              <a href="product_details.html?id=${id}" title="${shop_title}">
               <img src="${img[0]}" alt="">
              </a>
              </div>
              <div class="eh-pro-desc">
                <h6>
                  <a href="product_details.html?id=${id}" title="${shop_title}">${shop_title}</a>
                </h6>
                <div class="small-info">${shop_text1}</div>
                <div class="pro-buy-now">
                  ￥${parseFloat(shop_price).toFixed(2)}
                  <a href="">立即购买</a>
                </div>
              </div>
            </div>`
        };
      }
    )
      document.querySelector(".eh-product-list-wrap").innerHTML=html1;
      document.querySelector("#accessory").innerHTML=html2;
    }
  })
})();
