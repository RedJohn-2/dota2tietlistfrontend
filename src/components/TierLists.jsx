import {Button, Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'

export default function TierLists(props) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {props.lists.map(
          tl => 
            <Card className='m-8 w-3/5' key={tl.id}>
              <CardHeader><h1 className='text-center text-3xl font-serif'>{tl.name}</h1></CardHeader>
              <CardBody><h1 className='text-2xl text-wrap font-sans'>{tl.description}</h1></CardBody>
              <CardFooter className='flex justify-between'>
                <h1 className='text-lg font-extralight'>{tl.autor}</h1>
                <h1 className='text-lg font-extralight'>{tl.date.toString()}</h1>
                </CardFooter>
            </Card> 
          
        )}      
    </div>
  )
}
