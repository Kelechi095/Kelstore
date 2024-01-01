import moment from "moment";

export const formatDate = (value: any) => {
  const formattedDate = moment(value).format("DD-MM-YYYY");
  return formattedDate;
};
