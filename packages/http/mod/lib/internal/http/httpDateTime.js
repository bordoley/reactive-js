import { none } from "../../../../../core/mod/lib/option.js";
export const parseHttpDateTime = (v) => {
    const asDate = new Date(v);
    const result = asDate.getTime();
    return v !== "" && !Number.isNaN(result) ? result : none;
};
export const httpDateTimeToString = (v) => {
    const date = new Date(v);
    return date.toUTCString();
};
