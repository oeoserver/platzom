export default function platzom(str)
{
  let translation = str;
  //si a palabra termina en "ar", se e quitan esos dos caracteres
if(str.toLowerCase().endsWith('ar'))
  {
    translation = str.slice(0, -2)
  }
  //si la palabra inicia con z se le añade "pe" al final
if (str.toLowerCase().startsWith('z'))
  {
    translation += 'pe';
  }
  //si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion del medio
  const length = translation.length
if (translation.length >= 10)
  {
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHalf}-${secondHalf}`
  }

  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str)
  {
    const length = str.length
    let translation = ''
    let capitalize = true
    for(let i =0; i < length; i++)
    {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation

  }
  //si la palabra origina es un palindromo, niguna regla cuenta y se devueve, la misma palabra intercaando May y Minuscuas
  if(str == reverse(str))
  {
    return minMay(str)
  }
  return translation;
}
