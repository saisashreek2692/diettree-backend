const router = require("express").Router();

const {
  getAllPatient,
  getPatientsCountById,
  getPatientProgram,
} = require("../controllers/admin");
const { authorize } = require("../middleware/auth");

router.get("/get-all-patient", authorize("admin"), getAllPatient);
router.get(
  "/getPatientsCountById/:doctorId",
  authorize("admin"),
  getPatientsCountById
);

router.get(
  "/getPatientProgram/:doctorId",
  authorize("admin"),
  getPatientProgram
);

module.exports = router;
