import { StockService } from './service';

const stockService = new StockService();

export default (app, express) =>{
	const appRoute = express.Router();
	appRoute.get('/testConnection', function (req, res) {
		res.send({ 'success': true, 'message': 'Successfully Connected!' });
	});

	appRoute.get('/stock/get', stockService.getStock);
	appRoute.get('/transaction/get', stockService.getTransaction);
	appRoute.get('/stock/list', stockService.getStock);
	return appRoute;
}
