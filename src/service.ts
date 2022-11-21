import { readFileSync } from 'fs';
import { join } from 'path';
class StockService {
	/**
	 * @description 1. Get Stock Details
	 */
	async getStock(req, res) {
		try {
			const sku = req.query.sku;
			const stockDetails:string  = readFileSync(join(__dirname,"../","statics","stock.json"), { encoding: 'utf8' });
			let stockJSON = JSON.parse(stockDetails);
			if(sku){
				let skuDetails = stockJSON.find((iter)=>{return (iter.sku === sku)});
				const transactionDetails:string  = readFileSync(join(__dirname,"../","statics","transactions.json"), { encoding: 'utf8' });
				let transactionJSON = JSON.parse(transactionDetails)
				skuDetails.transactions = transactionJSON.filter((iter)=>{return (iter.sku === sku)})
				skuDetails.qty = skuDetails.stock
				skuDetails.transactions.forEach(transaction => {
					skuDetails.qty += transaction.qty
				});
				delete skuDetails.transactions;
				delete skuDetails.stock;
				return res.json({ success: true, message: 'Stock detail listed', data: skuDetails });
			} else{
				return res.json({ success: false, message: 'Stocks listed', data: stockJSON });
			}
		} catch (error) {
			return res.status(500).json({ success: false, message: `Issue while getting stock details ${error}` });
		}
	}

	/**
	 * @description 2. Get Transaction Details
	 */
	 async getTransaction(req, res) {
		try {
			const sku = req.query.sku;
			if(sku){
				const transactionDetails:string  = readFileSync(join(__dirname,"../","statics","transactions.json"), { encoding: 'utf8' });
				let transactionJSON = JSON.parse(transactionDetails)
				const transactions = transactionJSON.filter((iter)=>{return (iter.sku === sku)})
				return res.json({ success: true, message: 'Transaction detail listed', data: transactions });
			} else{
				return res.json({ success: false, message: 'Missing details'});
			}
		} catch (error) {
			return res.status(500).json({ success: false, message: `Issue while getting Transaction details ${error}` });
		}
	}
}
export { StockService };
