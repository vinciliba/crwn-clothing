import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionPreview  from '../components/preview-collection/collection-preview.component';

const ShopPage = () => {

    const [collections,setCollections] = useState([])

    useEffect(() => {
        setCollections(SHOP_DATA)
    },[])
            
return (
 <div className='shop-page'>
{
collections.map(({id,...otherCollectionProps}) => (
 <CollectionPreview key={id} {...otherCollectionProps} />

))

}

</div>);

}

export default ShopPage;