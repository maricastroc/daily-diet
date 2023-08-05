import { ContainerForTwoItems } from '@components/ContainerForTwoItems'
import { DietButton } from '@components/DietButton'
import { InnerContainerForTwoItems } from '@components/InnerContainerForTwoItems'
import { View } from 'react-native'
import { ButtonsContainer, ButtonsLabel } from './styles'
import { useState } from 'react'

interface DietButtonGroupProps {
  onSelect: (value: boolean) => void
  initialValue?: boolean | null
}

export function DietButtonGroup({
  onSelect,
  initialValue = null,
}: DietButtonGroupProps) {
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(initialValue)

  const handleSelectType = (type: boolean) => {
    setIsOnDiet(type)
    onSelect(type)
  }

  return (
    <ButtonsContainer>
      <ButtonsLabel>Is it on your diet?</ButtonsLabel>
      <ContainerForTwoItems>
        <InnerContainerForTwoItems>
          <DietButton
            type="ONDIET"
            onPress={() => handleSelectType(true)}
            isSelected={initialValue !== null && !!isOnDiet}
          />
        </InnerContainerForTwoItems>
        <View style={{ marginLeft: 12, marginRight: 12 }} />
        <InnerContainerForTwoItems>
          <DietButton
            type="OFFDIET"
            onPress={() => handleSelectType(false)}
            isSelected={initialValue !== null && !isOnDiet}
          />
        </InnerContainerForTwoItems>
      </ContainerForTwoItems>
    </ButtonsContainer>
  )
}
