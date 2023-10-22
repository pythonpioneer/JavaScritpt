// generating slots for solo
// end result: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], ...]

const generateSlots = ({ allowedPlayers, teamMembers, firstSlot }) => {

    // slot values
    let slots = [];
    let slotNumber = firstSlot;
    let slotArr = [];

    // iterate upto maxPlayers
    while (slotNumber < allowedPlayers + firstSlot) {
        
        slotArr = [];  // empty the slotArray
        for (let j=0; j<teamMembers; j++) {  // generate the size of the team
            
            // player positions
            slotArr.push(slotNumber++); 
        }

        // push the slot array into slots
        slots.push(slotArr); 
    }
    return slots;  // the actual slots for players
};

let res = generateSlots({ allowedPlayers: 92, teamMembers: 4, firstSlot: 9 });
console.log(res);
