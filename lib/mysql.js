import mysql from 'mysql';
import {getDefer} from './common';
import {mysqlConfig} from '../config';
const debug = require('debug')('paginator:query');

const conn = mysql.createConnection(mysqlConfig);
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
