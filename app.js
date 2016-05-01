import {paginator} from './lib/paginator';
import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'bower_components')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', async(req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const data = await paginator(page, 1);
  return res.render('index', {items: data});
});

app.listen(3000, () => {
  console.log('Paginator app listening on port 3000!');
});
