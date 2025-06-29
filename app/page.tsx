import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to Indonesian as default language
  redirect('/id')
}