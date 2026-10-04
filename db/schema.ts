import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const inventory=sqliteTable('inventory',{id:text('id').primaryKey(),status:text('status').notNull().default('Confirm stock'),price:integer('price'),quantity:integer('quantity').notNull().default(0),updatedAt:text('updated_at').notNull()});
export const demoOrders=sqliteTable('demo_orders',{id:text('id').primaryKey(),userId:text('user_id').notNull(),items:text('items').notNull(),total:integer('total').notNull(),status:text('status').notNull().default('Demo received'),createdAt:text('created_at').notNull()});
