/* const axios = require("axios");
const crypto = require("crypto");
require("dotenv").config();



let salt_key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"
let merchant_id = "PGTESTPAYUAT"

//Online Fee

const StudentOnlinePay = async (res, req) => {
    //const { name, amount, number, schoolFee, examFee, MUID, transactionId } = req.body;
    try {
        const merchantTransactionId = 'M' + Date.now();
        const MUID = 'M' + Date.now()
        //const studentId = req.params.id;
        const data = {
            merchantId: merchant_id,
            merchantTransactionId: merchantTransactionId,
            merchantUserId: MUID,
            name: "name",
            amount: req.body.amount * 100,
            redirectUrl: `http://localhost:5000/api/status/${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: 454344,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data)

            return res.json(response.data)
        })
            .catch(function (error) {
                console.error(error);
            });

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    StudentOnlinePay
}; */