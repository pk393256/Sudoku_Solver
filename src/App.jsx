import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Heading,
  Tbody,
  Tr,
  Th,
  Table,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import Input from './document/input'
import Btn from './document/output';

function App() {
  const [inputAll, setInputAll] = React.useState({
    name1: '',
    name2: '',
    name3: '',
    name4: '',
    name5: '',
    name6: '',
    name7: '',
    name8: '',
    name9: ''

  });
  const { name1, name2, name3, name4, name5, name6, name7, name8, name9 } = inputAll;
  // const [input2, setInput2] = React.useState('');
  // const [input3, setInput3] = React.useState('');
  // const [input4, setInput4] = React.useState('');
  // const [input5, setInput5] = React.useState('');
  // const [input6, setInput6] = React.useState('');
  // const [input7, setInput7] = React.useState('');
  // const [input8, setInput8] = React.useState('');
  // const [input9, setInput9] = React.useState('');
  let notPossible = '';
  let [complete,setComplete] = React.useState([]);
   
/////////Handling input code
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputAll({ ...inputAll, [name]: value })
  }


  ///////Submit function with sudoku code
  const Submit = () => {
    let solution=[1]
    let arr = []
    for (let i in inputAll) {
      arr.push(inputAll[i].split('').map(Number))
    }
    // console.log(arr)


    
    function isPossible(i, j, x, rows) {
      for (let k = 0; k < 9; k++) {
        if (rows[i][k] == x && k != j) {
          return false;
        }
        if (rows[k][j] == x && k != i) {
          return false;
        }
      }
      let rowX = Math.floor(i / 3);
      rowX = rowX * 3
      let rowY = Math.floor(j / 3);
      rowY = rowY * 3
      for (let pX = rowX; pX < rowX + 3; pX++) {
        for (let pY = rowY; pY < rowY + 3; pY++) {
          if (rows[pX][pY] == x) {
            if (pX != i && pY != j) {
              return false;
            }
          }
        }
      }
      return true;
    }
    function solve_it(ci, cj, cur_board) {
      if (ci >= 9) {
        solution = cur_board;
        return true
      }
      let nci = ci
      let ncj = cj
      if (ncj + 1 < 9) {
        ncj++
      } else {
        nci++
        ncj = 0
      }
      if (cur_board[ci][cj] != 0) {
        return solve_it(nci, ncj, cur_board)
      } else {
        for (let i = 1; i <= 9; i++) {
          if (isPossible(ci, cj, i, cur_board)) {
            cur_board[ci][cj] = i
            if (solve_it(nci, ncj, cur_board)) {
              return true
            }
            cur_board[ci][cj] = 0
          }
        }
        return false
      }
    }

    solve_it(0, 0, arr)

    if (solve_it(0, 0, arr) == false) {
      setComplete([-1])
    } else{
    setComplete(solution)
    }
  }
  
  return (
    <ChakraProvider theme={theme}>
      <Box ml='25%' display='flex' gap='90px'>
        <Box  mt='170px' width='300px' gap='3px' display='flex' flexDirection='column' border='3px solid green'>
          <input type='number' name='name1' value={name1} onChange={handleChange} />
          <input type='number' name='name2' value={name2} onChange={handleChange} />
          <input type='number' name='name3' value={name3} onChange={handleChange} />
          <input type='number' name='name4' value={name4} onChange={handleChange} />
          <input type='number' name='name5' value={name5} onChange={handleChange} />
          <input type='number' name='name6' value={name6} onChange={handleChange} />
          <input type='number' name='name7' value={name7} onChange={handleChange} />
          <input type='number' name='name8' value={name8} onChange={handleChange} />
          <input type='number' name='name9' value={name9} onChange={handleChange} />
          <Button onClick={Submit}>SOLVE</Button>
        </Box>
        <Box mt='130px' >
          <Heading ml='130px'>Solution</Heading>
          <h1>{notPossible}</h1>
          
          <Table size='sm' border='4px solid green'>
          <Tbody>
      {complete[0]==-1?<Heading>NO SOLUTION POSSIBLE</Heading>:complete.map((e)=>(
        <Tr border='4px solid blue'>
          <Td>{e[0]}</Td>
          <Td>{e[1]}</Td>
          <Td>{e[2]}</Td>
          <Td>{e[3]}</Td>
          <Td>{e[4]}</Td>
          <Td>{e[5]}</Td>
          <Td>{e[6]}</Td>
          <Td>{e[7]}</Td>
          <Td>{e[8]}</Td>

        </Tr>

        
      ))}
    </Tbody>
    </Table>
   
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
