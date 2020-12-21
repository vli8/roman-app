const request = require('supertest');
const app = require('../../');

describe('/ajax/integer_input', () => {
    it('should return 200 if input is valid', async () => {
        await request(app)
        .post('/ajax/integer_input')
        .send({ payload: 123 })
        .expect(200)
    });

    it('should return 500 if input is invalid', async () => {
        await request(app)
        .post('/ajax/integer_input')
        .send({ payload: 'poewf21' })
        .expect(500)
    });

    it('should return 500 if input is greater than the maximum', async () => {
        await request(app)
        .post('/ajax/integer_input')
        .send({ payload: 121909384029840923840923840923840932840239840 })
        .expect(500)
    });
});