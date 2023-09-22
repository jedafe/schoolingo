import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  author?: UserWhereUniqueInput | null;
  content?: InputJsonValue;
  description?: string | null;
  title?: string | null;
};
