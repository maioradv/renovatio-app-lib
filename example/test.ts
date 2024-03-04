import renovatioAppApi, { ApiVersion } from "../src";

const api = renovatioAppApi({
  host:'localhost:3000',
  version:ApiVersion.v1
})

api.pages.create({
  formatId:1,
  title:'test title',
  description:'test description',
  metafields:[
    {
      key:'year',
      value:'2024'
    },
    {
      key:'model',
      value:'t-shirt'
    }
  ],
  translations:[
    {
      key:'title',
      value:'titolo',
      locale:'it'
    },
    {
      key:'model',
      value:'maglietta',
      locale:'it'
    }
  ]
}).then(v => console.log(v)).catch(e => console.log(e))

api.pages.findAll({
  /*sorting:{
    id:'desc'
  }*/
}).then(v => console.log(v))

/*api.pages.findOne(1).then(v => console.log(v.slug))

api.pages.update(1,{
  title:'Test ASD ASD'
})*/