import { NextResponse } from 'next/server'
import { publications } from '@/lib/publications'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json(publications, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
