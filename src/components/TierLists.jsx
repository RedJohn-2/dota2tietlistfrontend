import {Button, Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'

export default function TierLists( {props} ) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {props.tierLists.Map(
          tl =>
            <Card className='m-8 w-3/5'>
              <CardHeader>Нзвание тирлиста</CardHeader>
              <CardBody>Описание тирлиста</CardBody>
              <CardFooter>Автор и дата изменения</CardFooter>
            </Card>
        )}      
    </div>
  )
}
