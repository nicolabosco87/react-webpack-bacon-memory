
export function log(msg) {
  require('fs').appendFileSync('../jest.log.txt', msg + '\n', { encoding: 'utf8' });
}

