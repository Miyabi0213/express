var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加

// 接続情報を設定
const { MongoClient } = require("mongodb");

// 接続情報を設定
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('test');
const tests = database.collection('test');


// 全てのドキュメントを取得
const test = await tests.find({}).toArray();

res.json(test);
})

module.exports = router;