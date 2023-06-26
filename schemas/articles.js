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
    name: 'createdBy',
    type: 'string',
    title: 'createdby'
  }, 
  {
    name: 'Category',
    type: 'string',
    title: 'category'
  }, 
  {
    name: 'timeToRead',
    type: 'string',
    title: 'timeToRead'
  },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },    {
      name: 'Body',
      type: 'string',
      title: 'body'
    }, {
      name: 'paragraph2',
      type: 'string',
      title: 'paragraph2'
    },{
      name: 'paragraph3',
      type: 'string',
      title: 'paragraph3'
    },{
      name: 'paragraph4',
      type: 'string',
      title: 'paragraph4'
    }, {
      name: 'paragraph5',
      type: 'string',
      title: 'paragraph5'
    },{
      name: 'paragraph6',
      type: 'string',
      title: 'paragraph6'
    },{
      name: 'image',
      type: 'image',
      title: 'image'
    },{
      name: 'imageUrl',
      type: 'string',
      title: 'imageUrl'
    },{
      name: 'image2',
      type: 'image',
      title: 'image2'
    },{
      name: 'image2Url',
      type: 'string',
      title: 'image2Url'
    },{
      name: 'image3',
      type: 'image',
      title: 'image3'
    },{
      name: 'image3Url',
      type: 'string',
      title: 'image3Url'
    },{
      name: 'image4',
      type: 'image',
      title: 'image4'
    },{
      name: 'image4Url',
      type: 'string',
      title: 'image4Url'
    }
  ]
}