import mongoose from 'mongoose';
import bcryptJS from 'bcryptjs';
import validator from 'validator';

const UserSchema = new mongoose.Schema(
  {
    //Primary
    username: {
      type: String,
      required: [true, 'Input a username'],
      unique: true,
      minlength: [3, 'Username is too short'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Input a valid email'],
      unique: true,
      maxlength: [254, 'Email is too long'],
      verified: Boolean,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      // required: [true, 'Input a valid password'],
      maxlength: 300,
      trim: true,
      //TODO: comment out before prod
      // validate: {
      //   validator: (value) => {
      //     const options = {
      //       minLength: 8,
      //       minLowercase: 1,
      //       minNumbers: 1,
      //       minUppercase: 0,
      //       minSymbols: 0,
      //     };

      //     return validator.isStrongPassword(value, options);
      //   },
      //   message: 'Password does not meet the strength requirements',
      // },
    },

    provider: {
      name: String,
      id: String,
      providerType: String,
    },

    profile: {
      firstName: { type: String, trim: true, lowercase: true },
      lastName: { type: String, trim: true, lowercase: true },
      pictureUrl: String, //why not use buffer?
      bio: {
        type: String,
        trim: true,
        lowercase: false,
        maxlength: [500, 'Bio can only take a maximum of 500 characters'],
      },
      // country: String,
      // language: String,
      // phone: {
      //   number: String,
      //   verified: Boolean,
      // },
      // birthday: Date,
    },
    role: {
      required: true,
      type: String,
      enum: ['student', 'teacher', 'admin'],
      default: 'student',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    // status: {
    //   type: String,
    //   enum: ['active', 'inactive', 'blocked'],
    //   default: 'active',
    // },

    //Additional
    completedLessons: { type: [mongoose.Schema.Types.ObjectId], ref: 'Lesson' },

    currentLesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },

    courses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },

    completedCourses: { type: [mongoose.Schema.Types.ObjectId], ref: 'Course' },

    completedUnits: { type: [mongoose.Schema.Types.ObjectId], ref: 'Unit' },

    achievements: { type: [mongoose.Schema.Types.ObjectId], ref: 'Achievement' },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  return (this.password = await bcryptJS.hash(this.password, 12));
});

UserSchema.methods.verifyPassword = async function (password) {
  return await bcryptJS.compare(password, this.password);
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
