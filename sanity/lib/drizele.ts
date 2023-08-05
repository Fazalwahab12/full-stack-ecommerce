import { drizzle } from 'drizzle-orm/node-postgres';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import {sql} from '@vercel/postgres'
import { InferModel,  } from 'drizzle-orm';
export const Table =pgTable ('cartt',{
    userid: varchar('user_id',{length:300},).notNull(),
    product_id:varchar('product_id',{length:300}).notNull(),
    quantity:integer('quantity',).notNull(),
    price:integer('price').notNull()
})


export type  typeoftable = InferModel<typeof Table>;
export const db = drizzle(sql);