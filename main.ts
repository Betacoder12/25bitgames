namespace flap {
    /**
     * make flappy:bit flap
     */
    //% blockId=arcadegames
    //%block=flappybit $bool
export function flap(bool: boolean){
    if (bool) {
     let flapping: number
    flapping = 4
        led.unplot(0, flapping)
       flapping += -1
        led.plot(0, flapping)
    }
     
     
     

 }  
}
