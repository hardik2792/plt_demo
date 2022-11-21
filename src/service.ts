import { readFileSync } from 'fs';
import { join } from 'path';
import { getDetails } from './stock.helper';
class StockService {

	/**
	 * @description 1. Get Stock Details
	 */
	async getStock(req, res) {
		try {
			const sku = req.query.sku;
			if(sku){
				return res.json(await getDetails(sku));
			} else{
				const stockDetails:string  = readFileSync(join(__dirname,"../","statics","stock.json"), { encoding: 'utf8' });
				let stockJSON = JSON.parse(stockDetails);
				return res.json({ success: false, message: 'Stocks listed', data: stockJSON });
			}
		} catch (error) {
			return res.status(500).json({ success: false, message: `Error: ${error}` });
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
				throw new Error("Missing Details");
			}
		} catch (error) {
			return res.status(500).json({ success: false, message: `Issue while getting Transaction details ${error}` });
		}
	}


}
export { StockService };
