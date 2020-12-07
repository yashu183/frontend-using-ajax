
init()

//for outer rows

//creating html skel

function crt(len)
{
  var i,j;
  var size;
  size = Math.ceil(len/4);
  var count = 0;
  for(i=0;i<size;i++)
  {
    var rowjs = document.createElement("div");
    rowjs.className="row" //parent.. each parent has 4 cards those are divs..
    for(j = 0; j<4;j++)
    {
      if(count === len)
      {
        break;
      }
      var cardjs = document.createElement("div");
      var cardimgjs = document.createElement("div");
      cardjs.appendChild(cardimgjs);
      rowjs.appendChild(cardjs);
      cardimgjs.className="cardImg";
      cardjs.className="card";
      count += 1;
    }
    var out = document.getElementById("contain");
    out.appendChild(rowjs);
    // if(count === len)
    // {
    //   break;
    // }
  }
}
  function init()
  {
  fetch('http://starlord.hackerearth.com/recipe')
  .then(response => response.json())
  .then(data => {
      crt(data.length);
      console.log(data); // jst for debuggingggg...
      const arr = document.getElementsByClassName("cardImg");
      console.log(arr[0]); // jst for debug
      var i;
      for(i=0;i<data.length;i++)
      {
        var link = document.createElement("a");
        var img = document.createElement('img'); 
        var name = document.createElement("h2");
        var brk = document.createElement("br");
        var price = document.createElement("h4");
        var des = document.createElement("p");
        var float = document.createElement("h3");
        var newdiv = document.createElement("div");
        var heart = document.createElement("i");
        heart.className="far fa-heart";
        newdiv.appendChild(name);
        newdiv.appendChild(heart);
        link.href = "index1.html";
        img.src = `${data[i]["image"]}`;  
        name.innerText = `${data[i]["name"]}`;
        price.innerText = "$ : "+`${data[i]["price"]}`;
        des.innerText = `${data[i]["description"]}`;
        float.innerText=`${data[i]["label"]}`;
        console.log(data[i]["image"]);
        // img.src =  "https://i.imgur.com/c5hBTEW.jpg";
        link.appendChild(img);
        arr[i].appendChild(link);
        arr[i].appendChild(newdiv);
        //arr[i].appendChild(brk); /// ??
        arr[i].appendChild(price);
        price.style.marginTop="10px";
        price.style.marginLeft="5px";
        arr[i].appendChild(des);
        des.style.marginTop="8px";
        des.style.marginLeft="3px";
        arr[i].appendChild(float);
        arr[i].style.position="relative";
        float.style.position="absolute";
        float.style.top="0";
        float.style.right="0";
        float.style.paddingRight="3%";
        float.style.paddingLeft="3%";
        float.style.borderRadius="10%";
        float.style.borderTopRightRadius="30%";
        float.style.background="black";
        //des.style.textAlign = "center";
        newdiv.className="newdiv";
      }
  });
  }

//searching....

var btn = document.getElementById("search");
var ipbox = document.getElementById("ipb");

btn.addEventListener('click',search);

function search()
{
  var contain1 = document.getElementById("contain");
  contain1.innerHTML='';
  let str = ipbox.value;
  ipbox.value="";
  console.log(str);
  str = str.toLowerCase();
  console.log(str);
  if(str === "")
  {
    console.log("yep");
    init();
    return;
  }
  fetch("http://starlord.hackerearth.com/recipe")
  .then(response1 => response1.json())
  .then(data1 => {
    let len = data1.length;
    var q,flag = 0;
    for(q = 0; q < len; q++)
    {
      var nam = data1[q]["name"];
      nam = nam.toLowerCase();   
      if(nam === str)
      {
        flag = 1;
        var row1 = document.createElement("div");
        row1.className="row";
        var card1 = document.createElement("div");
        card1.className="card";
        var cardimg1 = document.createElement("div");
        cardimg1.className="cardImg";
        card1.appendChild(cardimg1);
        row1.appendChild(card1);
        contain1.appendChild(row1);
        
        //grabbiong data from API

        var link1 = document.createElement("a");
        link1.href = "#";
        link1.className="link";
        var img1 = document.createElement("img");
        img1.src = `${data1[q]["image"]}`;
        link1.appendChild(img1);
        cardimg1.appendChild(link1);
        var name1 = document.createElement("h2");
        var newdiv = document.createElement("div");
        var heart = document.createElement("i");
        heart.className="far fa-heart";
        newdiv.appendChild(name1);
        newdiv.appendChild(heart);
        newdiv.className="newdiv";
        name1.innerText=`${data1[q]["name"]}`;
        var float1 = document.createElement("h3");
        float1.innerText=`${data1[q]["label"]}`;
        var price1 = document.createElement("h4");
        price1.innerText="$ : "+`${data1[q]["price"]}`;
        var des1 = document.createElement("p");
        des1.innerText = `${data1[q]["description"]}`;
        cardimg1.appendChild(newdiv);
        cardimg1.appendChild(price1);
        cardimg1.appendChild(des1);
        price1.style.marginTop="10px";
        price1.style.marginLeft="5px";
        des1.style.marginTop="8px";
        des1.style.marginLeft="3px";
        cardimg1.style.position="relative";
        float1.style.position="absolute";
        float1.style.top="0";
        float1.style.right="0";
        float1.style.paddingRight="3%";
        float1.style.paddingLeft="3%";
        float1.style.borderRadius="10%";
        float1.style.borderTopRightRadius="30%";
        float1.style.background="black";
      }
    }
    if( flag === 0)
    {
      var error = document.createElement("p")
      const str1 = " Sorry..!!! We don't have ur request.. :( ";
      error.innerText = str1;
      contain1.appendChild(error);
      contain1.style.width="100%";
      error.style.marginLeft="35%";
      error.style.marginTop="10%";
      error.style.fontSize="30px";
      error.style.color="white";
    }
  });
}