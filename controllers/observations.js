const Patient = require("../models/Patient");

const { getFormatDate } = require("../utils/common");

module.exports.add = async (req, res) => {
  try {
    const patient = await Patient.findById(req.body.patientId);
    if (!patient) {
      return res.status(400).json({
        success: false,
        message: "no patient found",
      });
    }
    patient.observations.push({
      desc: req.body.desc,
      docName: req.body.docName,
      doctorId: req.body.doctorId,
      createdOn: getFormatDate(new Date()),
    });
    await patient.save();

    return res.status(200).json({
      success: true,
      message: "Observations added successfully",
      data: patient,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    if (!patient) {
      return res.status(400).json({
        success: false,
        message: "no patient found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Observations fetched successfully",
      data: {
        patient_name: patient.name,
        observations: patient.observations,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
