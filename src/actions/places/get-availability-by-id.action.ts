
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const getAvailabilityById = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (placeId) => {

    await new Promise(resolve => setTimeout(resolve, 3000));

    const isAvailable = Math.random() > 0.5;
    const spotsAvailable = Math.floor(Math.random() * 10) + 1;

    let message = 'No spots available';

    if (isAvailable) {
      message = spotsAvailable > 1
        ? `${spotsAvailable} spots available`
        : '1 spot available';
    }

    return { success: true, placeId, isAvailable, spotsAvailable, message }
  }
})
