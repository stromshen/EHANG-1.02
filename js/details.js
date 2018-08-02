(function(){
  //var lid=location.search.slice(4);
  var lid=location.search.substring(4);

  //console.log(lid1);
  ajax({
    type:"get",
    url:"php/details.php?",
    data:{lid},
    dataType:"json",
    success:function(products){

      var html="";
      var html1="";
      var html2="";
        var html3="";
        var html4="";
        products.forEach((p,i)=>{
          var{id,details_name,details_price,details_freight,details_repertory,details_small,details_big1,details_big2,details_big3,details_big4,details_big5,details_big6,details_big7,details_big8,details_brand,details_texture, details_craft,details_gg,details_time,details_ts}=p;
         if (id==lid) {

           html+=`

           <div class="level_title" id="level_title">
     				${details_name}
     			</div>

     			<div class="level_money">
     				<span >
     					漫 淘 价：
     				</span>
     			    <span id="level_jq" >
     			    	￥${parseFloat(details_price).toFixed(2)}元
     			    </span>
     			</div>
     			<div class="yunfei">
     				运 费:
     				<span id="details_freight"> ${details_freight}</span>
            <p style="display:none" id="car_id">${id}</p>
     			</div>
           <div class="level_color" id="level_color">
             <div >颜色:</div>
             <a href="">白色
                <input type="text">
             </a>
             <a href="">黑色</a>
           </div>
     			<div class="yufei">

     				<span>
     					购 买 数 量 :
     				</span>
     				<a  >
     					<span class="s1" id="jian" onclick="jian()">-</span>
     				</a>
     				<span type="text" class="level_num" id="level_num" ></span>
     				<a>
     					<span class="s1"id="jia" onclick="jia()">+</span>
     				</a>
     				<span id="details_repertory">
     					商品库存：<span id="carRepertory">${details_repertory}</span>
     				</span>
     				<span>

     				</span>
     				<a href="">
     					喜欢收藏
     				</a>
            </div>


    <div class="level_shopping">
              <a  id="right_buy_car"><img src="img/right_buy_car.jpg" alt="" onclick="save()"></a>
                <a  id="right_buy"><img src="img/right_buy.jpg" alt=""></a>
            </div>

          </div>
        </div>`;

         }
         if (id==lid) {
            html1+=`<img src="${details_small}" alt="" id="carImg">`;
         }
         if (id==lid) {
            html4+=`<span>当前位置:
               <a href=""> 首页 </a>
                <span> >${details_name}</span>
            </span>`;
         }
         if (id==lid) {
            html2+=` <tbody >



            <tr>
              <td><p>品名</p></td>
              <td><p>${details_name}</p></td>
              <td><p>材质</p></td>
              <td><p>${details_texture}</p></td>

            </tr>
            <tr>
              <td><p>品 牌</p></td>
              <td><p>${details_brand}</p></td>
              <td><p>工 艺</p></td>
              <td><p>${details_craft}</p></td>

            </tr>
            <tr>
              <td><p>价 格</p></td>
              <td><p>${parseFloat(details_price).toFixed(0)}元/把</p></td>
              <td><p>规 格</p></td>
              <td><p>${details_gg}</p></td>

            </tr>
            <tr>
              <td><p>发货时间</p></td>
              <td colspan="3"><p>${details_time}</p></td>


            </tr>
            <tr>
              <td><p>温馨提示</p></td>
              <td colspan="3"><p>${details_ts}</p></td>


            </tr>
            </tbody>`;
         }
         if (id==lid) {
            html3+=`<img src="${details_big1}" alt="">
            <img src="${details_big2}" alt="">
            <img src="${details_big3}" alt="">
            <img src="${details_big4}" alt="">
            <img src="${details_big5}" alt="">
            <img src="${details_big6}" alt="">
            <img src="${details_big7}" alt="">
            <img src="${details_big8}" alt="">`

         };
        })
          document.querySelector(".level_right").innerHTML=html;
          document.querySelector(".level_left").innerHTML=html1;
          document.querySelector(".level_hk").innerHTML=html2;
          document.querySelector("#details_1").innerHTML=html3;
            document.querySelector(".curren").innerHTML=html4;
    }
  })
})();
