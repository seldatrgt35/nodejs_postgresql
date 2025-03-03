
const AuditLog = require('../models/auditlogModel');

exports.create = async (req, res) => {
    try {
        const auditLog = await AuditLog.create(req.body);
        res.status(201).json(auditLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getAll = async (req, res) => {
    try {
        const auditLogs = await AuditLog.findAll();
        res.status(200).json(auditLogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const auditLog = await AuditLog.findByPk(req.params.id);
        res.status(200).json(auditLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
