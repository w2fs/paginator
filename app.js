import Express from 'express';
import {paginator} from './lib/paginator';
import debug from 'debug';

const app = new Express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(Express.static('./www/lib'));

app.get('/', async(req, res) => {
  const page = parseInt(req.query.page || 1, 10) || 1;
  const data = await paginator(page, 1);
  debug('app:paginator')(data);
  res.render('index', { items: data});
});

app.listen(3000);
