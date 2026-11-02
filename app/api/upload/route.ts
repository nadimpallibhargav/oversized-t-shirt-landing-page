import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Please choose an image.' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.has(file.type) || file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'Use a JPG, PNG, or WebP image up to 5 MB.' }, { status: 400 })
    }

    const blob = await put(`custom-designs/${crypto.randomUUID()}-${file.name}`, file, {
      access: 'public',
      addRandomSuffix: false,
      contentType: file.type,
    })

    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error('[v0] Image upload failed:', error)
    return NextResponse.json({ error: 'Image upload failed. Please try again.' }, { status: 500 })
  }
}
