(function(){
  ajax({
    type:"get",
    url:"data/index/index.php",
    dataType:"json",
    success:function(products){
      var html1="";
      var html2="";
      var html3="";
      var a=0;
      var b=0;
      var c=0;
      products.forEach((p,i)=>{
        var {title,text1,banner,type,img}=p;
        if(b<4&&type==2){
          b++;
          html2+=`<div class="col-md-3 col-xs-12 pd5 mb10 ">
            <a class="product-box-item" href="">
              <div class="product-img-wrap">
                <img src="${img}" alt="智能无人机">
              </div>
              <div class="product-box-item-tit">
                <span class="tit-alias">${title}</span><br>
                ${text1}
              </div>
            </a>
          </div>`
        };

        if(c<4&&type==3){
          c++;
          html3+=`<div class="col-md-3 col-xs-6 pd5">
            <a class="index-server-item" href="#">
              <img src="${img}" alt="官方授权无人机经销商">
              <div class="index-server-item-tit">
                <div class="small-tit">${title}</div>
                <div class="tit">${text1}</div>
                <div class="tit">${banner}</div>
              </div>
            </a>
          </div>`
        };
      }
    )
      // document.querySelector("#a1").innerHTML=html1;
      document.querySelector(".row1").innerHTML=html2;
      document.querySelector(".row2").innerHTML=html3;
    }
  })

})();
