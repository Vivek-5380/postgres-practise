const {Router} = require('express');
const router = Router();

const studentsController = require("./controller");

router.get('/' , studentsController.getStudents);

router.get('/:id' , studentsController.getStudentById);

router.post('/' , studentsController.insertStudent);

router.delete('/:id' , studentsController.deleteStudentById);

router.put('/:id' , studentsController.updateStudentById);

module.exports = router;