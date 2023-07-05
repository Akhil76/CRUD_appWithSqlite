



const products = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
    };
}
const product = async(req,res)=>{
    try {
        const {id} = req.params; 
       
    } catch (error) {
        console.log(error);
    };
}

const addproduct= async(req,res)=>{

    try {
        const {name,price} = req.body;
       
    

    } catch (error) {
        console.log(error);
    }
};


module.exports = {products,product,addproduct};