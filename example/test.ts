import renovatioAppApi, { ApiVersion } from ".";

const api = renovatioAppApi({
  host:'localhost:3000',
  version:ApiVersion.v1
})

api.pages.create({
  formatId:2,
  title:'prova'
}).then(v => console.log(v)).catch(e => console.log(e))

/*api.pages.findAll().then(v => console.log(v))

api.pages.findOne(1).then(v => console.log(v.slug))

api.pages.update(1,{
  title:'Test ASD ASD'
})*/