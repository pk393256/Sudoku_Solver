import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

  function Input(){

    return(
        <>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
            <NumberInput step={5}  min={0} max={999999999}> <NumberInputField /></NumberInput>
        </>
    )
  }
  export default Input;