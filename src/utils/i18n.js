import data from './data.json'

const loadlan=(keyword , placeholder,value)=>{
    const lan =localStorage.getItem('lan') || "en"
   const text=data[lan][keyword];
     if(placeholder && value){
        return text.replace(placeholder,value) 
     }
     return text
}
export default loadlan;