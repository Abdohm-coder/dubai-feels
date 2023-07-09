import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const formatDate = ({
  date,
  format,
}: {
  date: number;
  format: string;
}) => dayjs(date).format(format);
