import { prisma } from "@db/index";
import { defineAction } from "astro:actions";

export const getPlaces = defineAction({
  accept: 'json',
  handler: async () => {
    try {
      const places = await prisma.place.findMany();

      return { success: true, places }
    } catch (error) {
      console.log(error);
      throw new Error('Error getting places');
    }
  }
})

