const Task = require('../models').Task;
const Category = require('../models').Category;
module.exports = {
  index: function(req,res){
    Category.findAll().then((categories)=>{
      res.render('categories/index',{categories});
    })
  },
  show: function(req,res){
    Category.findByPk(req.params.id).then(function(category){
      res.render('categories/show', {category});
    });
  },
  edit: function(req,res){
    Category.findByPk(req.params.id).then(function(category){
      res.render('categories/edit', {category:category});
    });
  },
  destroy: function(req,res){
    Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (contadorElementosEliminados){
      res.redirect('/categories');
    });
  },
  create: function(req,res) {
    Category.create({
        title: req.body.title,
        color: req.body.color
    }).then(result=>{
      res.json(result);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    })
  },
  update: function(req,res){
    Category.update({
        title: req.body.title, 
        color: req.body.color
    },{
      where: {
        id: req.params.id
      }
    }).then(function (response){
      res.redirect('/categories/'+req.params.id);
    })
  },
  new: function(req,res){
    res.render('categories/new');
  }
};
