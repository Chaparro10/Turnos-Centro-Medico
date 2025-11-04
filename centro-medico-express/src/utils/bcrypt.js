
const bcrypt =require('bcryptjs');

const hashPassword=(password)=>{
    return bcrypt.hashSync(password,10);
}

const compareHash=(hash,pass)=>{
    return bcrypt.compareSync(pass,hash);
}
module.exports={hashPassword, compareHash}