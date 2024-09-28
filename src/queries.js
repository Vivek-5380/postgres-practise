const getStudents = "SELECT * FROM students";

const getStudentById = "SELECT * FROM students WHERE id = $1";

const checkDupEmails = "SELECT s.* FROM students s WHERE s.email = $1";

const insertStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

const deleteStudentById = "DELETE FROM students WHERE id = $1";

const updateStudentById = `
    UPDATE students 
    SET name = $1 
    WHERE id = $2
`;

module.exports = {
    getStudents,
    getStudentById,
    checkDupEmails,
    insertStudent,
    deleteStudentById,
    updateStudentById,
};
