import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// JSON dosyasının yolunu belirtin
const filePath = path.join('C:', 'Users', 'hp', 'Documents', 'PortfolioNext', 'metin-portfolio', 'src', 'app', 'data', 'db.json');

// GET isteğini işleyen fonksiyon
export async function GET() {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error reading data' }, { status: 500 });
  }
}

// POST isteğini işleyen fonksiyon
export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    data.push(formData); // Yeni form verisini mevcut veriye ekle

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}