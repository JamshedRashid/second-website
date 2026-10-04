import {getDb} from '../../../db';
import {inventory} from '../../../db/schema';
export const dynamic='force-dynamic';
export async function GET(){const rows=await getDb().select().from(inventory);return Response.json({items:rows},{headers:{'Cache-Control':'no-store'}})}
