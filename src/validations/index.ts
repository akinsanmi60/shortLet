import { z } from 'zod';

export const GetCountrySchemaByName = z.object({
  countryName: z.string().min(3).max(100),
});
