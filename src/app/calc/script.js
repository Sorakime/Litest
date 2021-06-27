var num='';

function output(){
  document.getElementsByTagName('calc-output')[0].innerText=num;
}

function forinput(numb){
  let input=numb;
  if(num=='' && numb=='.')
    input='0.';

  if(numb=='+'||numb=='-'||numb=='*'||numb=='/'){
    switch (num.substr(-1)){
      case '-':
        return false;
        break;
      case '+':
        return false;
        break;
      case '*':
        return false;
        break;
      case '/':
        return false;
        break;
    }
  }
  num=num+input;
  output();
}

function forerase(scale){
  num=num.slice(0, -1);
  output();
}

function math(){
  if(num!==''){
    let result=new Function('return '+num);
    num=result();
    output();
  }else{
    return false;
  }
}

document.addEventListener('keyup',(e)=>{
  switch(e.key){
    case '1':
      forinput('1');
      break;
    case '2':
      forinput('2');
      break;
    case '3':
      forinput('3');
      break;
    case '4':
      forinput('4');
      break;
    case '5':
      forinput('5');
      break;
    case '6':
      forinput('6');
      break;
    case '7':
      forinput('7');
      break;
    case '8':
      forinput('8');
      break;
    case '9':
      forinput('9');
      break;
    case '0':
      forinput('0');
      break;
    case '+':
      forinput('+');
      break;
    case '-':
      forinput('-');
      break;
    case '*':
      forinput('*');
      break;
    case '/':
      forinput('/');
      break;
    case 'Backspace':
      forerase();
      break;
    case 'Delete':
      window.location.reload();
      break;
    case 'Enter':
      math();
      break;
    case 'p':
      forinput('3.1415');
      break;
    case '%':
      forinput('$');
      break;
    case '.':
      forinput('.');
      break;
    default:
      console.log(e.key);
  }
})

document.addEventListener('copy',(e)=>{
  e.clipboardData.setData('text/plain',document.getElementsByTagName('calc-output')[0].innerText);
})
shortcut.add('Ctrl+C',()=>{
  document.execCommand('copy');
});
