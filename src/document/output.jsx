
import {Button} from '@chakra-ui/react';
function Btn(props){
    console.log(props)
       const {solve}=props
    //    console.log(solve)
    return(
        <Button>{solve}</Button>
    )
}
export default Btn;