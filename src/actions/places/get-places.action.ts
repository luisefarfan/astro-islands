import { prisma } from "@db/index";
import { defineAction } from "astro:actions";
import type { Place } from "@interfaces/Place";

export const getPlaces = defineAction({
  accept: 'json',
  handler: async () => {
    try {
      const places = await prisma.place.findMany();

      return { success: true, places: places as unknown as Place[] }
    } catch (error) {
      console.log(error);
      throw new Error('Error getting places');
    }
  }
})

