export const getAllBank = async() => {
    // const response =  await fetch('https://dev.obtenmas.com/catom/api/challenge/banks')
    const response = await fetch('./data.json'); 
    const data = await response.json();
    return data;


    
   
}