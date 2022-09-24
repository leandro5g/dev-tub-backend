import { Schema, Types, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

type IClass = {
  course_id?: Types.ObjectId;
  title: string;
  description: string;
  url_id: string;
  channelId: string;
  duration: string;
  class_index: number;
  publishedAt: Date;
  channelTitle: string;
};

const classSchema = new Schema<IClass>(
  {
    title: { type: "String", required: true },
    description: { type: "String", required: true },
    url_id: { type: "String", required: true },
    duration: { type: "String", required: true },
    class_index: { type: "Number", required: true },
    channelId: { type: "String", required: true },
    publishedAt: { type: "Date", required: true },
    course_id: { type: Types.ObjectId, ref: "Course" },
  },
  {
    timestamps: true,
  }
);

classSchema.plugin(paginate);

const classModel = model<IClass>("Class", classSchema);

export { classModel, IClass };
