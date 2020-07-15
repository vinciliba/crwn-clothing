const INITIAL_STATE = {
    sections:[
    {
    title:"HATS",
    imageUrl:"http://i.ibb.co/cvpntL1/hats.png",
    linkUrl:"hats",
    id:1
   },
   {
    title:"JACKETS",
    imageUrl:"http://i.ibb.co/px2tCc3/jackets.png",
    linkUrl:"",
    id:2
   },
   {
    title:"SNEAKERS",
    imageUrl:"http://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl:"",
    id:3
    },
    {
    title:"WOMEN'S", 
    imageUrl:"http://i.ibb.co/GCCdy8t/womens.png",
    size:'large',
    linkUrl:"",
    id:4
    },
    {
    title:"MEN'S", 
    imageUrl:"http://i.ibb.co/R70vBrQ/men.png",
    size:'large',
    linkUrl:"",
    id:5
    }
            ]
    };

    const directoryReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            default:
                return state;
        }
    };

    export default directoryReducer;