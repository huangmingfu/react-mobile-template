import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

/**
 * 日期时间格式化工具。
 */
export const dateUtil = dayjs;

/**
 * 将日期时间格式化为指定格式的字符串。
 * @param date 要格式化的日期时间。如果未提供，则默认为当前时间。
 * @param format 要格式化的目标格式，默认为 DATE_TIME_FORMAT。
 * @returns 格式化后的日期时间字符串。
 */
export function formatToDateTime(date?: dayjs.ConfigType, format = DATE_TIME_FORMAT): string {
  return dayjs(date).format(format);
}

/**
 * 将日期格式化为指定格式的字符串。
 * @param date 要格式化的日期。如果未提供，则默认为当前日期。
 * @param format 要格式化的目标格式，默认为 DATE_FORMAT。
 * @returns 格式化后的日期字符串。
 */
export function formatToDate(date?: dayjs.ConfigType, format = DATE_FORMAT): string {
  return dayjs(date).format(format);
}
