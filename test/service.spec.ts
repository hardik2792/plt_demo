import 'mocha';
import axios from "axios";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
// import chaiHttp = require('chai-http');

// let should = chai.should();

import { Server } from "../src/server";

const expect = chai.expect;
chai.use(chaiAsPromised);
// chai.use(chaiHttp);
let server: Server;

describe("Stock service", () => {
    const axios = require("axios");
    const serverURL = "http://127.0.0.1:3000"

    before(async () => {
        server = new Server();
        return await server.up();
    })

    after(async () => {
        return await server.shutdown()
    })

    it('Should succeed for Server Connection', async () => {
        const { data } = await axios.get(`${serverURL}/testConnection`);
        expect(data).to.have.property("success");
        expect(data).to.have.property("message");
        expect(data.message).to.be.an("string");
    })


    it('Should succeed for stock list', async () => {
        const { data } = await axios.get(`${serverURL}/stock/list`);
        expect(data).to.have.property("success");
        expect(data).to.have.property("data");
        expect(data).to.have.property("message");
        expect(data.data).to.be.an("array");
    })

    it('Should succeed for stock details', async () => {
        const { data } = await axios.get(`${serverURL}/stock/get?sku=SXK331510/08/41`);
        expect(data).to.have.property("success");
        expect(data).to.have.property("data");
        expect(data).to.have.property("message");
        expect(data.data).to.have.property("sku");
        expect(data.data).to.have.property("transactions");
    })

    it('Should fail for missing stock details', async () => {
        const { data } = await axios.get(`${serverURL}/stock/get?sku=SXK331510/08/4`);
        expect(data).to.have.property("success");
        expect(data).to.have.property("message");
    })

    it('Should succeed for transaction details', async () => {
        const { data } = await axios.get(`${serverURL}/transaction/get?sku=SXK331510/08/41`)
        expect(data).to.have.property("success");
        expect(data).to.have.property("data");
        expect(data).to.have.property("message");
        expect(data.data).to.be.an("array");
    })

    it('Should fail for missing details', async () => {
        const { data } = await axios.get(`${serverURL}/transaction/get`);
        expect(data).to.have.property("success");
        expect(data).to.have.property("message");
    })
})