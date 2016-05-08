import {pool, format} from 'wulian-mysql';

exports.paginator = async(page, pageSize = 10) => {
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  });
  const rows = await cn.query(format('SELECT id,name,type FROM paginator ORDER BY id ASC LIMIT ?,?', [(page - 1) * pageSize, pageSize]));
  const totalRows = await cn.query('SELECT count(1) as count FROM paginator LIMIT 1');
  const result = {
    total: totalRows[0].count,
    currentPage: page,
    totalPages: Math.ceil(totalRows[0].count / pageSize),
    data: rows
  };
  cn.release();
  return result;
};
