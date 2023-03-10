// functional programming,, callback

// callback function
// function siPalingCoding(input) {
//     return console.log(input)}

// function sum(a, b) {
//     const result = a + b;
//     return console.log(result)}
    
// function sum2(a, b, callback) {
//     const result = a + b
//     callback(result)}

// sum2(1, 2, siPalingCoding)

//chai assertions
const expect = require('chai').expect;
//mocha function
const apiUnderTest = require('../api_regre');
describe('ini adalah test suite dari https://reqres.in/api/users',   async () => {
    it('(GET) testcase NAME tidak boleh kosong', async () => {
        const response = await apiUnderTest.getUser();
        // console.log(response.status);   
        // console.log(response.body);  

       // assertion
        const data = response.body.data

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].first_name);
            expect(data[i].first_name).to.not.equal(null); //expect  kosong
        }
        });

        //assertion post dari ngirim data
        it('ID-01 - (POST) Test Input valid', async () => {
            const data =
                {
                    "name": 'riko',
                    "job": 'engineer'
                };

            let response = await apiUnderTest.createUser(data);
            // console.log(response.status);
            // console.log(response.body);
    
            // assertion
            expect(response.body.name).to.equal('riko'); // sama aja dengan input 
            expect(response.body.job).to.equal(data.job); // tapi dibedain ama variable
            console.log(response.body); 

           
            });

            it('ID-02 - test id utk mencari nama', async () => {
                response = await apiUnderTest.getSingUser('8');
                expect(response.body.data.first_name).to.equal('Lindsay');
                console.log(response.body.data);
            });

            it('ID-03 - Test apakah endpoint create user berfungsi membuat data user ketika inputnya name itu kosong', async () => {
                const data = {
                    "name": "",
                    "job": "leader"
                };
                const response = await apiUnderTest.createUser(data);
                // console.log(response.status);
                // console.log(response.body);
        
                // assertion
                expect(response.body.name).to.equal(data.name);
            });
   

    });
