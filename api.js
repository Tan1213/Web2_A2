//  https://github.com/Tan1213/Web2_A2



const mySql = require('mysql');

// Connect to the database
let dbConnect = mySql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'crowdfunding_db',
    user: 'root',
    password: '123456',
})
dbConnect.connect();

const router = require('express').Router();

// Search sql
const sql1 = `select cate.name, fund.* from category cate join fundraiser fund on fund.category_id = cate.category_id where (fund.city = ? or ? = '') and (fund.organizer = ? or ? = '') and (fund.category_id = ? or ? = '') and (fund.active = 1)`;
const sql2 = `select cate.name, fund.* from category cate join fundraiser fund on fund.category_id = cate.category_id where fund.fundraiser_id = ?`;
const sql3 = `select organizer from fundraiser`;
const sql4 = `select * from category`;
const sql5 = `select city from fundraiser`;
// Search fundraiser
router.get('/searchData', (request, response) => {
        const query = request.query;
        for (const key in request.query) {
            query[key] = !!query[key] ? query[key] : '';
        }
        const arr = [query.city, query.city, query.organizer, query.organizer, query.category_id, query.category_id];
        dbConnect.query(sql1, arr, function(err, data) {
            response.send(data)
        });
    })
    // Search detail
    .get('/detail', (request, response) => {
        const query = request.query;
        const arr = [query.f_id];
        dbConnect.query(sql2, arr, function(err, data) {
            response.send(data[0])
        });
    })
    // Search organizer
    .get('/organizer', (request, response) => {
        dbConnect.query(sql3, function(err, data) {
            response.send(data)
        });
    })
    // Search category
    .get('/category', (request, response) => {
        dbConnect.query(sql4, function(err, data) {
            response.send(data)
        });
    })
    // Search city
    .get('/city', (request, response) => {
        dbConnect.query(sql5, function(err, data) {
            response.send(data)
        });
    })



module.exports = router