import React,{useState,useEffect} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

const Directory = () => {

    const [sections,setSection] = useState([])

    useEffect (() => {
       setSection([{title:"HATS",imageUrl:"http://i.ibb.co/cvpntL1/hats.png",linkUrl:"hats",id:1},
       {title:"JACKETS",imageUrl:"http://i.ibb.co/px2tCc3/jackets.png",linkUrl:"",id:2},
       {title:"SNEAKERS",imageUrl:"http://i.ibb.co/0jqHpnp/sneakers.png",linkUrl:"",id:3},
       {title:"WOMEN'S", imageUrl:"http://i.ibb.co/GCCdy8t/womens.png",size:'large',linkUrl:"",id:4},
       {title:"MEN'S", imageUrl:"http://i.ibb.co/R70vBrQ/men.png",size:'large',linkUrl:"",id:5}])
    },[])
    

return(
<div className="directory-menu">
        {sections.map(({id,...sectionProps}) => {
         return <MenuItem key = {id} {...sectionProps} />
        })   
       }     
    </div>

);
}

export default Directory;
