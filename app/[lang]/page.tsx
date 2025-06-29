import { ClientWrapper } from '../components/ClientWrapper'
import { Language } from '../lib/translations'

interface Props {
  params: Promise<{ lang: string }>
}

export default async function Home({ params }: Props) {
  const { lang } = await params
  return <ClientWrapper initialLanguage={lang as Language} />
}