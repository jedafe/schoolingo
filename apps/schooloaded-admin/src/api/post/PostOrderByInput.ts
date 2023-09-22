import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  Posts?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
