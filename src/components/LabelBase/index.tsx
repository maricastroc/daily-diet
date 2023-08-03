import { Label } from './styles'

type Props = {
  label: string
}

export function LabelBase({ label }: Props) {
  return <Label>{label}</Label>
}
