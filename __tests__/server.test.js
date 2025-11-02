const request = require('supertest');
const app = require('../server'); // import your app

describe('Express App', () => {
  test('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });

  test('POST /user should create user', async () => {
    const res = await request(app)
      .post('/user')
      .send({ name: 'Dev' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User Dev created');
  });

  test('POST /user without name should fail', async () => {
    const res = await request(app).post('/user').send({});
    expect(res.statusCode).toBe(400);
  });
});
