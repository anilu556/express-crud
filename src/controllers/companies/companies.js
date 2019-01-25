//definir funciones para http requests

const companies = require('../../../data')
const fs = require ('fs');

const controllers = {
  index: (req, res) => {
    res
    .status(200)
    .json({
      data: companies
    })
  },

  find: (req, res) => {
    //console.log(req.params)
    const queryId = req.params.id

    const company = companies.data.filter(company => company.id.toString() === queryId)
    //console.log(company)
    res
    .status(200)
    .json({
      data: company
    })
  },

  create: (req, res)  => {
    const newData = [...companies.data, req.body]
    const dataJson = JSON.stringify({data: newData});
    //console.log(dataJson)
    fs.writeFile('./data.json', dataJson, (err) => {
    if (err) throw err;
    })
    res.status(200).json({data: newData});
    }
  }


//exportar
module.exports = controllers;
