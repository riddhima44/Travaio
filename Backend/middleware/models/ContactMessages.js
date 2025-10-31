const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    relation: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true }
  },
  { _id: false } 
);

const contactMessageSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    phone:   { type: String, trim: true },
    company: { type: String, trim: true },
    concern: { type: String, required: true, trim: true, maxlength: 5000 },
    emergencyContacts: [emergencyContactSchema], // ✅ added feature
    submittedAt: { type: Date, default: Date.now }
  },
  { collection: 'contact_messages' }
);


module.exports = mongoose.model('ContactMessage', contactMessageSchema);
