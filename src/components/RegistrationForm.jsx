import {Button, FormControl, FormHelperText, FormLabel, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import steamButton from '../assets/steam_signin.png'
import React, { useEffect, useState } from 'react';
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { steamAuth } from '../services/auth';

export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);

    const handlePasswordShowClick = () => setShowPassword(!showPassword);
    const handleConformPasswordShowClick = () => setShowConformPassword(!showConformPassword);

    async function steamAuthClickHandler()
    {
        await steamAuth()
    }


  return (
    <div className='bg-green-300 border-4 border-black rounded-2xl w-1/3 h-full p-10'>
        <FormControl className='mb-8'>
        <FormLabel htmlFor="name"><h1 className='font-mono text-lg'>Nickname</h1></FormLabel>
        <Input type="name" id="name" aria-describedby="name-helper-text"  
        isInvalid={false}
        errorBorderColor="crimson"
        borderColor="black"
        focusBorderColor='blue.500'
        bgColor="gray.200"
        />
        </FormControl>

        <FormControl className='mb-8'>
        <FormLabel htmlFor="email"><h1 className='font-mono text-lg'>Email</h1></FormLabel>
        <Input type="email" id="email" aria-describedby="email-helper-text" 
        isInvalid={false}
        errorBorderColor="crimson"
        borderColor="black"
        focusBorderColor='blue.500'
        bgColor="gray.200"
        />
        </FormControl>

        <FormControl className='mb-8'>
        <FormLabel htmlFor="password"><h1 className='font-mono text-lg'>Password</h1></FormLabel>
        <InputGroup size="md">
        <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            isInvalid={false}
        errorBorderColor="crimson"
        borderColor="black"
        focusBorderColor='blue.500'
        bgColor="gray.200"
        />
        <InputRightElement width="4.5rem">
            <Button border="1px" h="1.75rem" size="sm" onClick={handlePasswordShowClick}>
            {showPassword ? <BiSolidShow className={"size-6"} /> : <BiSolidHide className={"size-6"}/>}
            </Button>
        </InputRightElement>
        </InputGroup>
        </FormControl>

        <FormControl className='mb-8'>
        <FormLabel htmlFor="confirm-password"><h1 className='font-mono text-lg'>Confirm Password</h1></FormLabel>
        <InputGroup size="md">
        <Input
            pr="4.5rem"
            type={showConformPassword ? "text" : "password"}
            isInvalid={false}
        errorBorderColor="crimson"
        borderColor="black"
        focusBorderColor='blue.500'
        bgColor="gray.200"
        />
        <InputRightElement width="4.5rem">
            <Button border="1px" h="1.75rem" size="sm" onClick={handleConformPasswordShowClick}>
            {showConformPassword ? <BiSolidShow className={"size-6"} /> : <BiSolidHide className={"size-6"}/>}
            </Button>
        </InputRightElement>
        </InputGroup>
          
        </FormControl>

        <div className='flex flex-col items-center justify-center m-8'>
        <h1 className='font-mono text-lg'>Войдите через Steam, чтобы получить доступ к расширенной функциональности</h1>
        <img src={steamButton} alt="" className='m-8 h-16 active:animate-ping' onClick={async () => {await steamAuthClickHandler()}}/>
        </div>
    </div>
  )
}