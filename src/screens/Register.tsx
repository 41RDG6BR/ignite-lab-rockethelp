import { VStack } from 'native-base'

import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Register() {

    return (
      <VStack flex={1} bg="gray.600" px={6}>
          <Header title="Nova solicitação" />
        
          <Input 
            placeholder="Número do patrimônio"
            mt={4}          
          />

          <Input 
            placeholder="Descrição do problema"
            flex={1}
            mt={5}
            multiline
            textAlignVertical="top"
          />

          <Button 
           title="Cadastrar"
           mt={5} 
          />
      </VStack>
    )
}