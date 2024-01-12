import Midtrans from "midtrans-client"
import { NextResponse } from "next/server"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT
})

export async function POST(request) {
    const { productName, price, quantity } = await request.json()

    let parameter = {
        item_details: {
            name: productName,
            price: price,
            quantity: quantity
        },
        transaction_details: {
            order_id: "ORDER-" + Date.now(),
            gross_amount: price * quantity
        },
    }

    const token = await snap.createTransactionToken(parameter)
    return NextResponse.json({ token })
}