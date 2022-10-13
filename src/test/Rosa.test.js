const request =  require('supertest')
const server =  require('../index.js')
// jest.setTimeout(60000);
describe('Get Endpoints', () => {
    it('Get',  (done) => {
        const res =    request(server)
        .get('/')
        .send({
            userId:  1,
            title:  'test is cool',
        });
        expect(res._data.title).toEqual('test is cool');
        server.close();
        done();
    })
})
