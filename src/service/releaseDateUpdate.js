import { format } from "date-fns";

export function releaseDateUpdate(data) {
    return format(new Date(data), "yyyy")
}