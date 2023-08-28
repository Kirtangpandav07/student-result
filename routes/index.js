var express = require('express');
var router = express.Router();
const fs = require('fs')



const data = fs.readFileSync("./data.json", 'utf-8')
const jsonconvet = JSON.parse(data)
console.log(jsonconvet);




/* GET home page. */
router.get('/', function(req, res, next) {

  let no = req.query.no
  let studentName= req.query.studentName
  let sub1=req.query.sub1
  let sub2=req.query.sub2
  let sub3=req.query.sub3
  let sub4=req.query.sub4
  let sub5=req.query.sub5


  dataobj={
    no: no,
    studentName:studentName,
    sub1:sub1,
    sub2:sub2,
    sub3:sub3,
    sub4:sub4,
    sub5:sub5
  }


  // add

  if(dataobj.no,dataobj.studentName,dataobj.sub1,dataobj.sub2,dataobj.sub3,dataobj.sub4,dataobj.sub5){
    let upIndex=req.query.upDataid
    if (upIndex>0 || upIndex==="0") {
      jsonconvet.splice(upIndex,1,dataobj)
    }else{
      jsonconvet.push(dataobj)
    }

    
    fs.writeFileSync("./data.json",JSON.stringify(jsonconvet),"utf-8")
    res.redirect('/')
  }

  // edit
  cuurntData={}
  let index1 = req.query.i
  if(index1 >= 0){
    cuurntData=jsonconvet[index1]
  }


  // delet
  let index = req.query.id
  if(index >= 0){
    jsonconvet.splice(index,1)
    fs.writeFileSync("./data.json",JSON.stringify(jsonconvet),"utf-8")
    res.redirect('/')
  }





  res.render('index', { value:jsonconvet , cuurntData:cuurntData,index1:index1});
});

router.get('/details', function(req, res, next) {
  res.render('details', { data:jsonconvet,i:req.query.id});
});





module.exports = router;
