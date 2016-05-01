import {query} from './mysql';
import {format} from 'mysql';

exports.paginator = async(page, pageSize = 10) => {
  const totalRows = await query('SELECT count(1) as count FROM paginator LIMIT 1');
  const items = await query(format('SELECT `id`,`name`,`type` FROM paginator ORDER BY id ASC LIMIT ?,?', [(page - 1) * pageSize, pageSize]));
  return {
    currentPage: page,
    total: totalRows[0].count,
    totalPages: Math.ceil((totalRows[0].count) / pageSize),
    data: items
  };
};
