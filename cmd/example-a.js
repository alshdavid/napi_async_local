import napi from '@workspace/napi_sandbox'

napi.exampleA((data) => console.log('Rust has run'))

setTimeout(() => console.log('Not blocked'), 0)
setTimeout(() => console.log('Not blocked'), 500)
setTimeout(() => console.log('Not blocked'), 1000)
setTimeout(() => console.log('Not blocked'), 1500)