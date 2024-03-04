import renovatioAppApi, { ApiVersion } from "../src";

const api = renovatioAppApi({
  host:'localhost:3000',
  version:ApiVersion.v1
})

api.pages.create({
  formatId:1,
  title:'prova'
}).then(v => console.log(v)).catch(e => console.log(e))

api.pages.findAll({
  sorting:{
    id:'asc'
  }
}).then(v => console.log(v))

/*api.pages.findOne(1).then(v => console.log(v.slug))

api.pages.update(1,{
  title:'Test ASD ASD'
})*/