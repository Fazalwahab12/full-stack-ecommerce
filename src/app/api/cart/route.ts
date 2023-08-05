
import { NextRequest, NextResponse } from "next/server";
import { db ,Table} from "../../../../sanity/lib/drizele";
import { eq } from "drizzle-orm";




export async function GET(){
    try {
        const res=await db.select().from(Table)
        return NextResponse.json(res)
    } catch (error) {
        console.log('error',(error as{message :string}).message);
        return NextResponse.json({message:"Something went wrong"})
        
    }
}


export async function POST(Requst:NextRequest){
    const req=await Requst.json()
    console.log(req);
    
    try {
        if (req.user && req.product_id && req.quantity && req.price) {
            const resp=await db.insert(Table).values(req).returning()
            return NextResponse.json(resp)
            
        } else {
            throw Error('plese add product')
        }
        
    } catch (error) {
        console.log('error',(error as{message :string}).message);
        return NextResponse.json({message:"Something went wrong"})
        
    }
}



export async function PUT(Requst:NextRequest){
    const req=await Requst.json()
    console.log(req);
    
    try {
        
            let resp=await db.update(Table).set(req).where(eq(Table.product_id, req.product_id)).returning()
       console.log('respose of put',resp);
       return NextResponse.json(resp)
        
    } catch (error) {
        console.log('error',(error as{message :string}).message);
        return NextResponse.json({message:"Something went wrong"})
        
    }
}



export async function DELETE(Requst:NextRequest){
    let url =  Requst.nextUrl.searchParams
    console.log(url);
    try {
        if (url.has("product_Id"  ) && url.has("user_Id" )) {
          
          let respo = await db.delete(Table).where
          (eq(Table.product_id,(url.get("product_Id") as string))
          && eq(Table.product_id,(url.get("user_Id") as string))
          ).returning()
          console.log('put',respo);
          
        return NextResponse.json(respo)
        }
              
        
    } catch (error) {
        console.log('error',(error as{message :string}).message);
        return NextResponse.json({message:"Something went wrong"})
        
    }
}


