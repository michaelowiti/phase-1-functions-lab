// Code your solution in this file!
function distanceFromHqInBlocks(blockNo){
    if(blockNo>42){
        return blockNo-42;
    }
    else if(blockNo<42){
        return 42-blockNo;
    }

}
 function distanceFromHqInFeet(blocksfeet){
    if (blocksfeet<42){
      return (42-blocksfeet) * 264;
}
else{   
    return (blocksfeet-42) * 264;
 }
}

 function distanceTravelledInFeet(startBlock,destBlock){
    if(destBlock>startBlock){
    return (destBlock-startBlock) * 264;
}
else if(destBlock<startBlock){
    return (startBlock-destBlock) * 264;
}
 }
function calculatesFarePrice(startBlock,destBlock){
    let feet;
    if(destBlock>startBlock){
        feet=(destBlock-startBlock) * 264;
    }
    else{
        feet= (startBlock-destBlock) * 264;
    }

if(feet<=400){
    return 0;
}

else if(feet>=400 && feet<=2000){
    return (feet-400) * 0.02;
}
 else if(feet>2000 && feet<=2500){
    return 25;
 }
else{
    return 'cannot travel that far'
}
}