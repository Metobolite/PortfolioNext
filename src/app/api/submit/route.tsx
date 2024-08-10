import { NextRequest, NextResponse } from 'next/server';

// POST isteğini işleyen fonksiyon
export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    console.log(formData);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}