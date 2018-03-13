let localhostDev=true
let _host=localhostDev ? 'http://localhost:8080': 'http://xxx.com'
let httpUrl={
  'test':_host+'/api/test',
  'test1':_host+'/api/test1',
  'test2':_host+'/api/test2',
}

export {httpUrl}
