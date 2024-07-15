import {Button, Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import ItemsTier from './ItemsTier'
import { useState } from 'react'

export default function TierList(props) {
  const [tiers, setTiers] = useState(
    [
      {id: 1, title: "S", items: [{id: 1, title: "Pudge"}, {id: 2, title: "Sf"}, {id: 3, title: "Spiner"}]},
      {id: 2, title: "Af", items: [{id: 4, title: "Babka"}, {id: 5, title: "Xuesos"}, {id: 6, title: "Muerta"}]},
      {id: 3, title: "B", items: [{id: 7, title: "Pangolier"}, {id: 8, title: "Weaver"}, {id: 9, title: "Nyx"}]},
      {id: 4, title: "Herodsfsdfes", items: []}
    ]
  )

  const [currentTier, setCurrentTier] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e)
  {
    e.preventDefault();
    if (e.target.className.includes("tierItem"))
      e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
  
  }

  function dragLeaveHandler(e)
  {
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e, tier, item)
  {
    setCurrentTier(tier)
    setCurrentItem(item)
  }

  function dragEndHandler(e)
  {
    e.target.style.boxShadow = 'none'
  }

  function dropHandler(e, tier, item)
  {
    e.preventDefault();
    const currentIndex = currentTier.items.indexOf(currentItem)
    currentTier.items.splice(currentIndex, 1)
    const dropIndex = tier.items.indexOf(item)
    tier.items.splice(dropIndex + 1, 0, currentItem)
    setTiers(
      tiers.map(
        t => {
          if (t.id === tier.id) {
              return tier
          }

          if (t.id === currentTier.id) {
              return currentTier
          }

          return t
        }
      )
    )

    e.target.style.boxShadow = 'none'
  }

  function dropItemHandler(e, tier)
  {
    if (tier.items.includes(currentItem))
    {
      return
    }
    tier.items.push(currentItem)
    const currentIndex = currentTier.items.indexOf(currentItem)
    currentTier.items.splice(currentIndex, 1)
    setTiers(
      tiers.map(
        t => {
          if (t.id === tier.id) {
              return tier
          }

          if (t.id === currentTier.id) {
              return currentTier
          }

          return t
        }
      )
    )

    e.target.style.boxShadow = 'none'
  }
  
  return (
    <div className='bg-slate-500 border-4 border-black w-11/12 h-full flex flex-col items-center justify-center'>
        {
            tiers.map(
              tier => 
                <div className='border-black border-2 w-full min-h-24 flex' key={tier.id}>
                  <div className='bg-red-700 border-r-2 border-black w-40 min-w-40 min-h-full items-center flex justify-center p-1'>
                    <h1 className='text-center text-5xl select-none text-wrap w-full'>{tier.title}</h1>
                  </div> 
                  <div className='w-full min-h-full flex flex-wrap p-1'
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropItemHandler(e, tier)}
                    >
                    {
                        tier.items.map(
                            item =>
                                <div className='tierItem bg-green-700 m-1 border-2 border-black w-32 h-24 select-none' key={item.id} 
                                draggable={true}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragStart={(e) => dragStartHandler(e, tier, item)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDrop={(e) => dropHandler(e, tier, item)}
                                >
                                    <h1>
                                        {item.title}
                                    </h1>
                                </div>
                        )
                    }
                  </div>             
              </div>
            )
        }
    </div>
  )
}
