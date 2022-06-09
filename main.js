let colaList = [{
    "name": "Original Cola",
    "price": "1000원",
    "image": "./src/images/Original_Cola.png"
  },
  {
    "name": "Violet Cola",
    "price": "1000원",
    "image": "./src/images/Violet_cola.png"
  },
  {
    "name": "Yellow Cola",
    "price": "1000원",
    "image": "./src/images/Yellow_Cola.png"
  },
  {
    "name": "Cool Cola",
    "price": "1000원",
    "image": "./src/images/Cool_Cola.png"
  },
  {
    "name": "Green Cola",
    "price": "1000원",
    "image": "./src/images/Green_Cola.png"
  },
  {
    "name": "Orange Cola",
    "price": "1000원",
    "image": "./src/images/Orange_Cola.png"
  }];
  const displayCola = document.querySelector(".list-item");  //콜라버튼리스트  ul
  const selectCola = document.querySelector(".list-item-staged");
  // 밑에 클릭한 콜라 리스트 ul
  
  





colaList.forEach(item => {
    const colaLi = document.createElement("li");
    const button = document.createElement('button');
    button.className = 'btn-item';

    const image = document.createElement('img');
    image.className = "img-item";
    image.src = item.image;

    const colaName = document.createElement('strong');
    colaName.className = "tit-item";
    colaName.innerText = item.name;

    const colaPrice = document.createElement("span");
    colaPrice.className = "txt-price";
    colaPrice.innerText = item.price;

    displayCola.append(colaLi)
    colaLi.append(button);  
    button.append(image, colaName, colaPrice);    
})


function click () {
  
let clickNum  = 1;
return(clickNum++);
}


//콜라버튼 눌렀을때 리스트에 추가
displayCola.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const clickedCola = e.target;
    const clickedColaName = clickedCola.querySelector('.tit-item').innerText;
    const clickedColaImg = clickedCola.querySelector('.img-item').src;


    const colaLi = document.createElement("li");
    const button = document.createElement('button');
    const image = document.createElement('img');
    const colaName = document.createElement('strong');
    const numCount = document.createElement("span");
  
    button.className ="btn-staged";
    image.className = "img-item";
    image.src = clickedColaImg;
    colaName.className = "txt-item";
    colaName.innerText = clickedColaName;
    numCount.className = "num-counter";
    numCount.innerText = click();  

    selectCola.append(colaLi);
        colaLi.append(button);
        button.append(image,colaName,numCount);
  }
//클릭한거 추출 e.target
  // for(let i = 0; i<colaList.length; i++){
  //   const colaLi = document.createElement("li");
  //   const button = document.createElement('button');
  //   const image = document.createElement('img');
  //   const colaName = document.createElement('strong');
  //   const numCount = document.createElement("span");
  
  //   button.className ="btn-staged";
  //   image.className = "img-item";
  //   image.src = colaList[i]["image"]
  //   colaName.className = "txt-item";
  //   colaName.innerText = colaList[i]["name"]
  //   numCount.className = "num-counter";
  //   numCount.innerText = `${i}`  //클릭수 함수만들어서  바꿀예정
    
  //   let colaitem = colaList[i];
  //   console.log(colaList[i])
  //   if(e.target=="Original Cola"){  
  //     selectCola.append(colaLi);
  //     colaLi.append(button);
  //     button.append(image,colaName,numCount);
  //     break;
  //   }
  //   else if(colaitem["name"]=="Violet Cola"){
  //     selectCola.append(colaLi);
  //     colaLi.append(button);
  //     button.append(image,colaName,numCount);
  //     break;
  //   }
  //   else if(colaitem["name"]=="Yellow Cola"){
  //     selectCola.append(colaLi);
  //     colaLi.append(button);
  //     button.append(image,colaName,numCount);
  //     break;
  //   }
  //   else if(colaitem["name"]=="Cool Cola"){
  //     selectCola.append(colaLi);
  //     colaLi.append(button);
  //     button.append(image,colaName,numCount);
  //     break;
  //   }
  //   else if(colaitem["name"]=="Green Cola"){
  //     selectCola.append(colaLi);
  //     colaLi.append(button);
  //     button.append(image,colaName,numCount);
  //     break;
  //   }
  //   else if(colaitem["name"]=="Orange Cola"){
  //     selectCola.append(colaLi);
  //     colaLi.append(button);
  //     button.append(image,colaName,numCount);
  //     break;
  //   }
  // }
    //       i 첫빠따가 무조건 여기부터 들림. 맞다면 break때문에 종료됨 -> 첫빠따인 original만 나옴.  
    //    근데 break없으면 i=1부터 6까지 다돌기때문에 모든콜라가 다 추가됨...ㅠ 
    //    콜라순서를 거꾸로해도 안됨. 
    // if문을 쓰는게 맞는가?
    // else if말고 if끝나기전에 if문을 넣는식으로 넣어봐도 안됨.
  
})

// 입금하기관련 명령어
const deposit = document.querySelector('.inp-put');  // 입금액 입력 input
const depositBtn = document.querySelector('.btn-put');  //입금버튼
const nowBalance = document.querySelector('.txt-mymoney');   //소지금
const realBalance = document.querySelector('.real-balance');  //잔액
const returnBtn = document.querySelector(".btn-return");  //거스름돈 버튼

// 소지금 자판기에 입금하기 구현
depositBtn.addEventListener('click', ()=>{
let result=0;
let transfer = 0;
result = parseInt(nowBalance.innerText) -parseInt(deposit.value);
transfer = parseInt(realBalance.innerText)+parseInt(deposit.value);
if(deposit.value<0){
    alert("입금액을 확인하세요")
    deposit.value=""
    return
}
if(result>=0){
    nowBalance.innerText=`${result}`;
    realBalance.innerText=`${transfer}`;
}else{
    alert("입금액을 확인하세요");
} 
deposit.value=""
})

// 거스름돈 구현
returnBtn.addEventListener('click', () => {
    let zero = 0;
    let transfer = 0;
    zero = parseInt(realBalance.innerText) - parseInt(realBalance.innerText);
    transfer = parseInt(realBalance.innerText) + parseInt(nowBalance.innerText);
    realBalance.innerText = `${zero}`;
    nowBalance.innerText = `${transfer}`;
})
