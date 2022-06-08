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




//콜라버튼 눌렀을때 리스트에 추가
displayCola.addEventListener('click', () => {

  for(let i = 0; i<colaList.length; i++){
    const colaLi = document.createElement("li");
    const button = document.createElement('button');
    const image = document.createElement('img');
    const colaName = document.createElement('strong');
    const numCount = document.createElement("span");
  
    button.className ="btn-staged";
    image.className = "img-item";
    image.src = colaList[i]["image"]
    colaName.className = "txt-item";
    colaName.innerText = colaList[i]["name"]
    numCount.className = "num-counter";
    numCount.innerText = `${i}`  //클릭수로 변경

    const colaitem = colaList[i];

    if(colaitem["name"]=="Original Cola"){
      selectCola.append(colaLi);
      colaLi.append(button);
      button.append(image,colaName,numCount);
      if(colaitem["name"]=="Violet Cola"){
        selectCola.append(colaLi);
        colaLi.append(button);
        button.append(image,colaName,numCount);
        if(colaitem["name"]=="Yellow Cola"){
          selectCola.append(colaLi);
          colaLi.append(button);
          button.append(image,colaName,numCount);
          if(colaitem["name"]=="Cool Cola"){
            selectCola.append(colaLi);
            colaLi.append(button);
            button.append(image,colaName,numCount);
            if(colaitem["name"]=="Green Cola"){
              selectCola.append(colaLi);
              colaLi.append(button);
              button.append(image,colaName,numCount);
              if(colaitem["name"]=="Orange Cola"){
                selectCola.append(colaLi);
                colaLi.append(button);
                button.append(image,colaName,numCount);
              }
            }
          }
        }
      }
    }

     



  }
    
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