const mongoose = require("mongoose");

const Patient = new mongoose.Schema({
  primaryTeamIds: [
    {
      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      name: {
        type: String,
      },
    },
  ],
  secondaryTeamIds: [
    {
      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      name: {
        type: String,
      },
    },
  ],
  patientId: {
    type: String,
  },
  photo: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  caretakers_name: {
    type: String,
    required: true,
  },
  caretakers_relation: {
    type: String,
    required: true,
  },
  caretakers_phone: {
    type: Number,
    required: true,
  },
  caretakers_time: {
    type: String,
    required: true,
  },
  health_plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "healthplan",
    required: true,
  },
  health_plan_date: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  health_amount_paid: [
    {
      paids: {
        type: Number,
      },
      createdOn: Date,
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  payment_mode: {
    type: String,
    required: true,
  },
  payment_date: {
    type: Date,
    required: true,
  },
  ref_id: {
    type: String,
    required: true,
  },
  next_payment_date: {
    type: Date,
    required: true,
  },
  observations: [
    {
      desc: {
        type: String,
      },
      docName: {
        type: String,
      },
      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      createdOn: Date,
    },
  ],
  otp: String,
  otpExpiresIn: String,
  createdOn: Date,
  status: {
    type: String,
    default: "Active", //De-Active
  },
  statusMessage: String,
  paymentStatus: {
    type: Boolean,
    default: false,
  },

  // expirationTime: {
  //   type: Date,
  //   default: function () {
  //     return new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
  //   },
  // },
});

module.exports = mongoose.model("patient", Patient);
