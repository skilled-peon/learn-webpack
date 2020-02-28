const express = require('express');

const app = express();

// 1) 配合没有重写路径的代理
// app.get('/api/user', (req, res)=> {
//     res.json({name: 'Hello World'})
// })

// 2) 配合重写路径的代理
app.get('/user', (req, res)=> {
    res.json({name: 'Hello World'})
})

app.listen(3000);