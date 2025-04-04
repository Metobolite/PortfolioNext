import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    console.log(formData);

    const filePath = path.join('C:', 'Users', 'hp', 'Documents', 'PortfolioNext', 'metin-portfolio', 'src', 'app', 'data', 'db.json');

    let existingData = [];
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      existingData = JSON.parse(data);
    } catch (error) {
      console.log('No existing data found, creating new file.');
    }

    existingData.push(formData);

    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}