import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';

// Create random user (not used in this file, but kept for reference)
/*
let createRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
};
*/

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Yuvraj@020306'
});

// Helper to generate a single row of user data
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// Generate 100 rows of data
let data = [];
for (let i = 0; i < 100; i++) {
    data.push(getRandomUser());
}

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

try {
    const [result] = await connection.query(q, [data]);
    console.log("Inserted:", result.affectedRows, "rows");
    await connection.end();
} catch (err) {
    console.error("Error encountered!");
    console.error(err);
}
