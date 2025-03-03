const Role = require('../models/roleModel');

exports.create = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            res.status(200).json(role);
        } else {
            res.status(404).json({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const role = await Role.update(req.body, {
            where: { id: req.params.id },
        });
        if (role[0]) {
            res.status(200).json({ message: 'Role updated successfully' });
        } else {
            res.status(404).json({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const role = await Role.destroy({
            where: { id: req.params.id },
        });
        if (role) {
            res.status(200).json({ message: 'Role deleted successfully' });
        } else {
            res.status(404).json({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
