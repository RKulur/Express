const StudentSchema = require("../Models/student");

const InsertStudent = async (req, res) => {
  const { name, phone, email, address } = req.body;

  let student = await StudentSchema.findOne({ email });

  if (student) {
    return res.json({ success: false, message: "Email already exists" });
  }

  student = new StudentSchema({ name, phone, email, address });

  let savedStudent = await student.save();

  res.json({
    success: true,
    message: `Student with name ${savedStudent.name} added successfully`,
  });
};

const GetStudent = async (req, res) => {
  let students = await StudentSchema.find();
  res.json({ success: true, students  });
};

const DeleteStudent = async (req, res) => {
  try {
    let stdId = req.params.id;
    let student = await StudentSchema.findById(stdId);
    if (!student) {
      return res.json({ success: false, message: "Student not found!!" });
    }
    await StudentSchema.findByIdAndDelete(stdId);
    res.json({
      success: true,
      message: `Student with id ${stdId} deleted successfully`,
    });
  } catch (error) {
    res.json(error);
  }
};

const UpdateStudent = async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const stdId = req.params.id;
    const isStudentPresent = await StudentSchema.findOne({_id : stdId});
    if(!isStudentPresent){
      return res.json({success:false,message:'Student not found!!'})
    }

    let newStudent = {}
    if(name) newStudent.name = name;
    if(phone) newStudent.phone = phone;
    if(email) newStudent.email = email;
    if(address) newStudent.address = address;

    await StudentSchema.findByIdAndUpdate(stdId,{$set:newStudent},{new:true})
    res.json({success:true,message:'Student with id ' + stdId + ' updated successfully'})
  } catch (error) {
    res.json(error);
  }
};

module.exports = { InsertStudent, GetStudent, DeleteStudent, UpdateStudent };
