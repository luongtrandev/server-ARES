var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getOrders() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from DynamicBlock");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  addOrder(order) {
    try {
      let  pool = await  sql.connect(config);
      //ar a= "Insert into tblOrder(IdDynamic,OrderDate,jsonValue) values("+order.IdDynamic+ ","+order.OrderDate+","+order.jsonValue+")";
      let a = order.IdDynamic;
      let b = order.OrderDate;
      let c = order.jsonValue;
      console.log( order.IdDynamic, order.OrderDate, order.jsonValue);
      let  insertProduct = await  pool.request().query("Insert into tblOrder(IdDynamic,OrderDate,jsonValue) values('"+(order.IdDynamic)+"','"+(order.OrderDate)+"','"+(order.jsonValue)+"')");


      // .input('IdDynamic', sql.Int, order.IdDynamic)
      // .input('OrderDate', sql.Date, order.OrderDate)
      // .input('jsonValue', sql.NVarChar, order.jsonValue)
      // .execute('tblOrder');
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }
  
  module.exports = {
    getOrders:  getOrders,
    addOrder:  addOrder
  }