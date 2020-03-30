import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { onGetTemperature, onLowStockAlert, onPostTemperature} from "./handlers";
import { SUCCESS_RESPONSE } from "./mockData/responses";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

app.get('/api/temperature', (request, response, next) => {
    try {
        return response.status(200).json(onGetTemperature(request.body));
    } catch (e) { return next (e) }
});

app.post('/api/temperature', (request, response, next) => {
    try {
        onPostTemperature(request.body);
        return response.status(200).json(SUCCESS_RESPONSE);
    } catch (e) { return next (e) }

});

app.post('/api/lowstockalert', (request, response, next) => {
    try {
        onLowStockAlert(request.body);
        return response.status(200).json(SUCCESS_RESPONSE);
    } catch (e) { return next (e) }
})

app.listen("8000", err => {
    if (err) return console.error(err);
    return console.log("Server is listening on 8000")
});