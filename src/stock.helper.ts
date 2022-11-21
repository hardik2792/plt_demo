import { readFileSync } from 'fs';
import { join } from 'path';

const getDetails = async(sku)=>{
    const stockDetails:string  = readFileSync(join(__dirname,"../","statics","stock.json"), { encoding: 'utf8' });
    let stockJSON = JSON.parse(stockDetails);
    let skuDetails = stockJSON.find((iter)=>{return (iter.sku === sku)});
    if(skuDetails){
        const transactionDetails:string  = readFileSync(join(__dirname,"../","statics","transactions.json"), { encoding: 'utf8' });
        let transactionJSON = JSON.parse(transactionDetails)
        skuDetails.transactions = transactionJSON.filter((iter)=>{return (iter.sku === sku)})
        skuDetails.qty = skuDetails.stock
        skuDetails.transactions.forEach(transaction => {
            skuDetails.qty += transaction.qty
        });
        delete skuDetails.transactions;
        delete skuDetails.stock;
        return { success: true, message: 'Stock detail listed', data: skuDetails };
    } else{
        throw new Error("SKU not found");
    }
}

export { getDetails }
