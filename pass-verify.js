const bcrypt = require('bcrypt');

async function verfyPassword(){
    const myPassword ='123 admin'
    const hash = '$2b$10$YDcKEvk3lBd5Abjib8g7WOsrDJ/Pq5HZinCcyJS7UeinTXbozESam'
    const isMatch = await bcrypt.compare(myPassword,hash);
    console.log(isMatch);
}

verfyPassword();
