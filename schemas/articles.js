// schemas/pet.js
export default {
  name: 'article',
  type: 'document',
	title: 'Article-Text',
  fields: [
    {
    name: 'id',
    type: 'string',
    title: 'ID'
  }, 
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },    {
      name: 'Body',
      type: 'string',
      title: 'body'
    }
  ]
}