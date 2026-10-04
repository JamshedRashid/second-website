import { env } from 'cloudflare:workers';
import {getChatGPTUser} from '../app/chatgpt-auth';
export async function adminUser(){const user=await getChatGPTUser();return user&&env.ADMIN_EMAIL&&user.email.toLowerCase()===env.ADMIN_EMAIL.toLowerCase()?user:null}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return !!origin&&origin===new URL(request.url).origin}
