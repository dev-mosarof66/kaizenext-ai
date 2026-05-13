import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
const CLIENT_EMAIL   = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
const PRIVATE_KEY    = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");

async function getSheet() {
  const auth = new google.auth.JWT({
    email:  CLIENT_EMAIL,
    key:    PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

export async function POST(req: NextRequest) {
  try {
    const { email, type, budget } = await req.json();

    if (!email || !type || !budget) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const sheets = await getSheet();
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range:         "Web & App Lead!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, email, type, budget]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[estimate] Google Sheets error:", err);
    return NextResponse.json({ error: "Failed to save. Please try again." }, { status: 500 });
  }
}
