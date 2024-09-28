const pool = require('../db');
const Q = require('./queries');

const getStudents = (req, res) => {
    pool.query(Q.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(Q.getStudentById, [id], (error, results) => {
        if (error) throw error;

        if (!results.rows.length) {
            res.status(404).send(`Student with ID: ${id} does not exist`);
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const insertStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    pool.query(Q.checkDupEmails, [email], (error, results) => {
        if (error) throw error;

        if (results.rows.length) {
            res.status(400).send(`Student with email: ${email} already exists`);
        } else {
            pool.query(Q.insertStudent, [name, email, age, dob], (error, results) => {
                if (error) throw error;

                res.status(201).send("Student created successfully");
            });
        }
    });
};

const deleteStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(Q.getStudentById, [id], (error, results) => {
        if (error) throw error;

        if (!results.rows.length) {
            res.status(404).send(`Student with ID: ${id} does not exist`);
        } else {
            pool.query(Q.deleteStudentById, [id], (error, results) => {
                if (error) throw error;

                res.status(200).send(`Student with ID: ${id} has been successfully deleted`);
            });
        }
    });
};

const updateStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(Q.getStudentById, [id], (error, results) => {
        if (error) throw error;

        if (!results.rows.length) {
            res.status(404).send(`Student with ID: ${id} does not exist`);
        } else {
            pool.query(Q.updateStudentById, [name, id], (error, results) => {
                if (error) throw error;

                res.status(200).send(`Student with ID: ${id} has been successfully updated`);
            });
        }
    });
};

module.exports = {
    getStudents,
    getStudentById,
    insertStudent,
    deleteStudentById,
    updateStudentById,
};
