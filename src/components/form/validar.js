export function TestaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  var numsStr = strCPF.replace(/[^0-9]/g, '');
  if (numsStr == "00000000000") return false;
  
  for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(numsStr.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  
  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(numsStr.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(numsStr.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  
  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(numsStr.substring(10, 11))) return false;
  return true;
}

export function TestarRG(strRG){
  return strRG.replace(/[^0-9]/g, '');
}
