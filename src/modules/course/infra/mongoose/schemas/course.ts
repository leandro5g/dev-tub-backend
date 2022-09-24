import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

interface ICourse {
  _id: string;
  name: string;
  number_of_classes: number;
  thumb: string;
}

const courseSchema = new Schema<ICourse>(
  {
    name: { type: "String", required: true },
    thumb: { type: "String", required: true },
    number_of_classes: { type: "Number", default: 0 },
  },
  {
    timestamps: true,
  }
);

courseSchema.plugin(paginate);

const CourseModel = model<ICourse>("Course", courseSchema);

export { CourseModel, ICourse };
