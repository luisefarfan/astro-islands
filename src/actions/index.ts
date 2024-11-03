import { getPlaces } from "@actions/places/get-places.action";
import { getAvailabilityById } from "./places/get-availability-by-id.action";

export const server = {
  getPlaces,
  getAvailabilityById
}
