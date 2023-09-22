import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Post = {
  author?: User | null;
  content: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
