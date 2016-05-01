import mysql from 'mysql';
import {getDefer} from './common';
const debug = require('debug')('paginator:query');

const conn = mysql.createConnection({
  username: 'root',
  passowrd: 'root',
  database: 'test'
});
conn.connect();

exports.query = (sql) => {
  const deferred = getDefer();
  conn.query(sql, (err, res) => {
    debug(sql);
    if (err) {
      debug(err);
      deferred.reject(err);
    }
    deferred.resolve(res);
  });
  return deferred.promise;
};
