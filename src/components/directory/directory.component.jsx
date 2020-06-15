import React,{useState,useEffect} from 'react';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.jsx';

const Directory = () => {

    const [sections,setSection] = useState([])

    useEffect (() => {
       setSection([{title:"HATS",imageUrl:"http://i.ibb.co/cvpntL1/hats.png",id:1},
       {title:"JACKETS",imageUrl:"http://i.ibb.co/px2tCc3/jackets.png",id:2},
       {title:"SNEAKERS",imageUrl:"http://i.ibb.co/0jqHpnp/sneakers.png",id:3},
       {title:"WOMEN'S", imageUrl:"http://i.ibb.co/GCCdy8t/womens.png",size:'large',id:4},
       {title:"MEN'S", imageUrl:"http://i.ibb.co/R70vBrQ/men.png",size:'large',id:5}])
    },[])
    

return(
<div className="directory-menu">
        {sections.map(section => {
         const {title, imageUrl, id, size} = section;
         return <MenuItem key = {id} title = {title} imageUrl={imageUrl} size={size} />
        })   
       }     
    </div>

);
}

export default Directory;
