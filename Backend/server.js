const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000; 

// app.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist')));
app.use(cors());
app.use(express.json());


const connection = mysql.createConnection( {
    host: 'sql5.freesqldatabase.com',
    user: 'sql5721447',
    password: 'yZ21t96JjY',
    database: 'sql5721447',
    port: 3306
})

connection.connect((err) => {
    if (err) throw err;
    console.log('My SQL Database is connected!')
});

app.use(express.json());

app.get('/products', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;
    let query = `
        SELECT p.id, p.title, p.description, p.price, p.imagePath, c.name AS category
        FROM Products p
        JOIN categories c ON p.category_id = c.id
    `;

    const queryParams = [];

    if (category) {
        query += ` WHERE c.name = ?`;
        queryParams.push(category);
    }

    if (sort) {
        switch (sort) {
            case 'price_asc':
                query += ' ORDER BY p.price ASC';
                break;
            case 'price_desc':
                query += ' ORDER BY p.price DESC';
                break;
            case 'alpha_asc':
                query += ' ORDER BY p.title ASC';
                break;
            case 'alpha_desc':
                query += ' ORDER BY p.title DESC';
                break;
            default:
                break;
        }
    }

    connection.query(query, queryParams, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
});
  


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Frontend', 'dist', 'index.html'));
//   });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
  });
