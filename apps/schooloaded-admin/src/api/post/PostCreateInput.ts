import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  author?: UserWhereUniqueInput | null;
  content?: InputJsonValue;
  description?: string | null;
  title?: string | null;
};
