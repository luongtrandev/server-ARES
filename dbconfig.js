// const  config = {
//     user:  'sa', // sql user
//     password:  'sa', //sql user password
//     server:  '192.168.1.139', // if it does not work try- localhost
//     database:  'Products',
//     options: {
//       trustedconnection:  true,
//       enableArithAbort:  true,
//       instancename:  'SQLEXPRESS'  // SQL Server instance name
//     },
//     port: 3005
//   }
const  config = {
    user:  'sa', // sql user
    password:  'sa', //sql user password
    server:  '192.168.1.139', // if it does not work try- localhost
    database:  'AresCAD',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }
  
module.exports = config;