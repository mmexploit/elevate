import { MarketingLayout } from '#components/layout'
import '../globals.css'
export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
