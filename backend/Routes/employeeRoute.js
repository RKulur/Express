const express = require('express');

const EmployeeSchema = require('../Models/employee')

const router = express.Router();

router.post('/insert',async (req,res)=>{
    const { empName,empPhone,email,address } = req.body;

    let isEmpThere = await EmployeeSchema.findOne({email});

    if(isEmpThere){
        return res.json('You cannot put this because employee is already present') 
    }
    
    let newEmployee = new EmployeeSchema({empName,empPhone,email,address});

    let saveEmployee = await newEmployee.save();
    
    res.json({
        success : true,
        message : 'Employee saved successfully with name ' + newEmployee.empName
    })
})

module.exports = router; 