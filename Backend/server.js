const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000; 

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection( {
    host: 'sql5.freesqldatabase.com',
    user: 'sql5719956',
    password: 'sas5lFrSl5',
    database: 'sql5719956',
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
        SELECT p.id, p.title, p.description, p.price, p.ImagePath, c.name AS category
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
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
  });
