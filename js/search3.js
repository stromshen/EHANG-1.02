(function (){
  var kw=location.search.slice(4);
  var pno=1;
  var pageSize=16;
  ajax({
    type:"get",
    url:"php/searchlist.php",
    data:{pno:pno,pageSize:pageSize,kw:kw},
    dataType:"json",
    success:function(products){
    var html2="";
    var{pno,pageSize,pageCount,data,row}=products;
      console.log(products[0]);
      var  pno=parseInt(pno);
      var row=parseInt(row);
      console.log(row);
      var  pageCount = parseInt(pageCount);
      html2+=`
                <span id="page">共&nbsp${row}&nbsp件商品 &nbsp</span>`;

                       if(pno-1>0){
                        html2+=`<a href="javascript:;" class="previous disabled"> ${pno-1}</a>`};
                     html2+=`<a href="javascript:;" class="current">${pno}</a>`
                     if(pno+1<=pageCount){
                      html2+=`<a href="javascript:;">${pno+1}</a>`};
                       if(pno+2<=pageCount){
                       html2+=`<a href="javascript:;" class="next">${pno+2}</a>}`;

                    }



        document.querySelector("#pages").innerHTML=html2;
      }
})
})();
