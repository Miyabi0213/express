var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");

// 接続情報を設定
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');
// idが1のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);
res.json(note);
})
module.exports = router;