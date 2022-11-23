const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
    },
    partnerOne: {
        type: String,
        required: true,
        minLength: 3,
    },
    partnerTwo: {
        type: String,
        required: true,
        minLength: 3,
    },
    guests: {
      type: Number,
      min: 0
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    }
},
{
  toObject:{ virtuals: true }
});

weddingSchema.virtual('user', {
  ref:'User',
  localField:'_id',
  foreignField:'weddings',
  justOne: false
});

weddingSchema.virtual('gifts', {
  ref: 'Gift',
  localField: '_id',
  foreignField: 'wedding',
  justOne: false
});

weddingSchema.virtual('tickets', {
  ref: 'Ticket',
  localField: '_id',
  foreignField: 'wedding',
  justOne: false
});

const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;