const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    videoURL: { type: String },
    duration: String,
    sequence: Number,
    image: String,
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unit',
      required: true,
      validate: { validator: isUnit, message: 'Invalid unit. Please provide a valid unit ID.' },
    },
  },
  { timestamps: true }
);

LessonSchema.pre('save', async function () {
  if (this.isNew) await mongoose.model('Unit').updateOne({ _id: this.unit }, { $push: { lessons: this._id } });
});

async function isUnit(value) {
  const unit = await mongoose.model('Unit').findById(value);
  return unit !== null;
}
// async function isUnitValid(value) {
//   const unitCount = await mongoose.model('Unit').countDocuments({ _id: value });
//   return unitCount > 0;
// }

export default mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);
