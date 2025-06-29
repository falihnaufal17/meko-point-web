import { ClientWrapper } from '../components/ClientWrapper'
import { Language } from '../lib/translations'

interface Props {
  params: { lang: string }
}

export default function Home({ params }: Props) {
  const lang = params.lang as Language
  return <ClientWrapper initialLanguage={lang} />
}