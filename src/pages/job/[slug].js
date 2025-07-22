import { useRouter } from 'next/router'
import React from 'react'

export default function Slug() {
    const router= useRouter();
    const {slug}= router.query;
  return (
    <div>

    </div>
  )
}
