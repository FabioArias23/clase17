import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentCollection = "students";

const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: {
      type: String,
      enum: ['M', 'F']
    },
    grade: {
      type: Number,
      min: 0,
      max: 10
    },
    group: {
      type: String,
      enum: ['1A', '1B']
    }
});

studentSchema.plugin(mongoosePaginate);

const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel;